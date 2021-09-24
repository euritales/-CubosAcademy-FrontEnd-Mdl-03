import "./styles.css";

function JobOpportunity({
  img_url,
  name,
  description,
  requirements,
  seniority,
  salary,
  benefits,
}) {
  return (
    <div className="container-job-opportunity">
      <img src={img_url} alt={name} className="logo" />
      <h2>Google</h2>
      <div className="details">
        <strong>Descrição</strong>
        <p>{description}</p>
      </div>
      <div className="details">
        <strong>Requisitos</strong>
        <div className="flex-row">
          {requirements.map((requirement) => (
            <div className="badge-blue" key={requirement}>
              {requirement}
            </div>
          ))}
        </div>
      </div>
      <div className="details">
        <strong>Senioridade</strong>
        <span>{seniority}</span>
      </div>
      <div className="details">
        <strong>Salario / Beneficios</strong>
        <span>
          R$ {salary} /{" "}
          {benefits.map((item, index) => (
            <span>
              {item}
              {index + 1 < benefits.length && ", "}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
export default JobOpportunity;
