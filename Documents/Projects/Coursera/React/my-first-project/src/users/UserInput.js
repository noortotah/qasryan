const UserInput = (props) => {
    return ( 
        <div className="form-group">
          <label>UserName</label>
          <input type="text"
            className="form-control" onChange={props.changeUserName} value={props.initialName} />
        </div>
   
     );
}
 
export default UserInput;