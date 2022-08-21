import { connect } from "react-redux"
import { openInfoBook} from '../actions/allActions'
import { closeInfoBook} from '../actions/allActions'
import {addingBook} from '../actions/allActions'

function Modal(props){
    return(
        <>
            {console.log('hey',props.AppState)}
           <section id="modal" className={props.AppState.popupOpen?"active":''}>
      <div className="modal-container">
      <div className="modal-grid">
        <div className="images">
          <div className="cover" style={{ backgroundImage: `url(`+props.AppState.openInfoBook.coverURL+`)`
}}>
           
          </div>
        </div>
        <div className="info">
          <div 
          className="close-modal"
          onClick={props.closeInfoBook}
          >
            x
          </div>
          <h2>{props.AppState.openInfoBook.title}</h2>
          <div className="info-line">
            <span className="bold">
                Author:
            </span>
            {props.AppState.openInfoBook.author}
          </div>
          <div className="info-line">
            <span className="bold">
                Category:
            </span>
            {props.AppState.openInfoBook.category}
          </div>
          <div className="info-line">
            <span className="bold">
                Published:
            </span>
            {props.AppState.openInfoBook.published}
          </div>
          <br />
          
          <div className="info-line desc" >
          {props.AppState.openInfoBook.description}
          </div>
          
          <br />
          <div className="addbtn" onClick={props.addingBook.bind(null, props.AppState.openInfoBook)}>
            +
          </div>

            
        </div>
      </div>
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
  

export default connect(mapStateToProps, {openInfoBook, closeInfoBook,addingBook}) (Modal)