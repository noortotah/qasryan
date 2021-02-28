
const Person = props => {
    return (
        <tr>
            <td>{ props.name}</td>
            <td>{ props.age }</td>
            <td>
                <button onClick={props.delete} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default Person;