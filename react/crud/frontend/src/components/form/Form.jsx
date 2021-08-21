export const Form = ({ fields, updateField, onCloseForm, onConfirmForm }) => {
  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control"
              name="name"
              value={fields.name}
              onChange={e => updateField(e)}
              placeholder="Digite o nome..." />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>E-mail</label>
            <input type="text" className="form-control"
              name="email"
              value={fields.email}
              onChange={e => updateField(e)}
              placeholder="Digite o e-mail..." />
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary"
            onClick={e => onConfirmForm(e)}>
            Salvar
          </button>
          <button className="btn btn-secondary ml-2"
            onClick={e => onCloseForm(e)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}