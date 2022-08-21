export default function Modal(){
    return(
        <>
           <section id="modal" className="active">
      <div className="modal-container">
      <div className="modal-grid">
        <div className="images">
          <div className="cover">
           
          </div>
        </div>
        <div className="info">
          <div className="close-modal">
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