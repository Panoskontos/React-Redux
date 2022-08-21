import { connect } from "react-redux"
import { openInfoBook} from '../actions/allActions'
import { closeInfoBook} from '../actions/allActions'

function Modal(props){
    return(
        <>
            {console.log('hey',props.AppState)}
           <section id="modal" className={props.AppState.popupOpen?"active":''}>
      <div className="modal-container">
      <div className="modal-grid">
        <div className="images">
          <div className="cover" style={{ backgroundImage: `url('https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1402/9780140280197.jpg')`
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
          <h2>Title</h2>
          <div className="info-line">
            <span className="bold">
                Author:
            </span>
            Chris 
          </div>
          <div className="info-line">
            <span className="bold">
                Category:
            </span>
            Action
          </div>
          <div className="info-line">
            <span className="bold">
                Published:
            </span>
            1980
          </div>
          <br />
          <div className="info-line desc" >
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus eius, illo doloribus dolorem minus quasi assumenda blanditiis quo sequi accusantium, natus dolor iste nam fugit qui velit odio aspernatur.
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
  

export default connect(mapStateToProps, {openInfoBook, closeInfoBook}) (Modal)