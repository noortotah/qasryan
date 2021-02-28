const ValidationComponent = (props) => {
    return ( 
        <p className={props.length > 5 ? 'text-success': 'text-danger'}> { props.length > 5 ? 'Length is OK' : 'Minimum is 5'} </p>
     );
}
 
export default ValidationComponent;