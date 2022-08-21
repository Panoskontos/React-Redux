import { connect } from "react-redux"
import { closeMyList} from '../actions/allActions'


function Mylist(props){
    return(
        <>
        <section id="mylist" className={props.AppState.listOpen?"active":""}>
        <h3>My list of books</h3>
        
        <ul>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
        </ul>

        <div 
        className="close-btn"
        onClick={props.closeMyList}
        >
          close
        </div>
      </section>
        </>
    )
}

// injecting state
const mapStateToProps = (state) =>{
    console.log(state)
    return state
  }
  

export default connect(mapStateToProps, {closeMyList}) (Mylist)