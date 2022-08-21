import { connect } from "react-redux"
import { openInfoBook} from '../actions/allActions'

function AllBooks(props){
  

    return(
        <>
        <section className="allbooks">
          
          <div className="open-list">
            List
          </div>


        
        <div className="book-container">
          <div 
          onClick={props.openInfoBook}
          className="book" 
          style={{ 
            backgroundImage: `url('https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1402/9780140280197.jpg')`
          }}
            >
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

export default connect(mapStateToProps, {openInfoBook}) (AllBooks)