import React from "react";

const ShowDetalis = () => {
    return(
        <>
       
<button type="button" className='moreDetails' data-bs-toggle="modal" data-bs-target="#exampleModal">
More Detalis
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalis Event</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='titleOfEvent'>
            Title of event
        </div>
        <div className='InfoOfEvent'>
                        <span className='day'>monday at 20:30pm in show-concert</span><br/>
                        <span className='price'>price for each person 30$</span>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Reserver</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ShowDetalis