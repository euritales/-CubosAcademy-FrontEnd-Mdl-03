import "./styles.css";
import "../../styles/form.css";
import { Link } from "react-router-dom";
import AllrightReserved from "../../components/AllRightReserved";
import { useState, useEffect } from "react";
import InputPassword from "../../components/InputPassword";
import { getCityByCEP } from "../../services/viaCEP";
import { toast } from "react-toastify";

function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");

  async function loadCityByCep(myCep) {
    const cityByCep = await getCityByCEP(myCep);

    if (!cityByCep) {
      toast.error("CEP invalido!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    setCity(cityByCep);
  }
  useEffect(() => {
    if (cep.length < 9 && city.length > 0) {
      setCity("");
    }

    if (cep.indexOf("-") !== -1) {
      if (cep.length === 9) {
        loadCityByCep(cep);
        return;
      }
    }
    if (cep.length === 8) {
      loadCityByCep(cep);
    }
  }, [cep]);

  return (
    <div className="container-form background-dark-form">
      <form className="form form-sign-up">
        <div className="text-center mb-lg">
          <h1>Cadastre-se</h1>
          <Link to="/sign-in">Entrar</Link>
        </div>
        <div className="body-sign-up">
          <div>
            <div className="flex-column">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Digite seu nome" />
            </div>
            <div className="flex-column">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                maxLength={9}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <InputPassword
              label="senha"
              placeholder="Digite sua senha"
              value={password}
              setValue={setPassword}
            />
          </div>
          <div>
            <div className="flex-column">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" placeholder="Digite seu email" />
            </div>
            <div className="flex-column">
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                placeholder="Digite sua cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <InputPassword
              label="Confirme sua senha"
              placeholder="Digite sua senha novamente"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </div>
        </div>
        <button className="btn-dark-blue">Cadastre-se</button>
        <br />
        <AllrightReserved />
      </form>
    </div>
  );
}
export default SignUp;
