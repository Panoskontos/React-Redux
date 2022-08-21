import { connect } from "react-redux"
import { openInfoBook, openMyList} from '../actions/allActions'

function AllBooks(props){
  

    return(
        <>
        <section className="allbooks">
          
          <div className="open-list" onClick={props.openMyList}>
            List
          </div>


        {props.booksData.map((i)=>{
          return (
            <>
            <div className="book-container">
          <div 
          onClick={props.openInfoBook}
          className="book" 
          style={{ 
            backgroundImage: `url(`+ i.coverURL +`)`
          }}
            >
          </div>
        </div>
            </>
          )
        })}
        
        
        
        

      </section>
        </>
    )
}

// injecting state
const mapStateToProps = (state) =>{
  console.log(state)
  return state
}

export default connect(mapStateToProps, {openInfoBook,openMyList}) (AllBooks)