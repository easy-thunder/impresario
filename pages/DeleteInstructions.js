import { Fragment } from "react";



export default function DeleteInstructions(){
    return <Fragment>

        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText updatedCenter">Delete Instructions</h1>
        <div style={{backgroundColor:"white", minHeight:"80vh"}}>
        <h2>Profile Deletion Instructions</h2>
        <h3>You can delete your profile in three easy steps!</h3>
        <ol>
          <li>When you signup you will have a Profile page. Click on your profile page</li>
          <li>Click on Delete Profile.</li>
          <li>Click on Yes and you profile will be deleted.</li>
        </ol>


        </div>
    </Fragment>
}



