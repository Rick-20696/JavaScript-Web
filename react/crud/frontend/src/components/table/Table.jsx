export const Table = ({ list, onRemove, onEdit }) => {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-warning"
                    onClick={() => onEdit(item.id)}>
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button className="btn btn-danger ml-2"
                    onClick={() => onRemove(item)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}