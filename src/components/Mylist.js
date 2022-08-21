export default function Mylist(){
    return(
        <>
        <section id="mylist">
        <h3>My list of books</h3>
        <ul>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
          <li>Harry Potter <span className="delete-btn">delete</span></li>
          <li>Harry Potter <span className="delete-btn">delete</span></li>

        </ul>
        <div className="close-btn">
          close
        </div>
      </section>
        </>
    )
}