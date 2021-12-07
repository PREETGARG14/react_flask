import React from "react";
import './adminTable.css';


function adminTable() {

  return (
    <div style={{ textAlign: "center"}}>
    <div id="logout">
      Welcome Admin<br>
      <button type="button" class="btn btn-default btn-sm">
  <span class="glyphicon glyphicon-log-out"></span> Log out
  </button>
    </div>
    <h1>Admin Panel</h1><br>
    <table>
      <tr>
          <th>Course id</th>
          <th>Title</th>
          <th>Tags</th>
          <th>Categories</th>
          <th>Link</th>
          <th>Type</th>
          <th>Featured</th>
          <th>Levels</th>
      </tr>

    //This data is only for sample
      <tr>
          <th>1</th>
          <th>Title-1</th>
          <th>Tags-1</th>
          <th>Categories-1</th>
          <th>Link-1</th>
          <th>Type-1</th>
          <th>Featured-1</th>
          <th>Levels-1</th>
      </tr>
      <tr>
          <th>2</th>
          <th>Title-2</th>
          <th>Tags-2</th>
          <th>Categories-2</th>
          <th>Link-2</th>
          <th>Type-2</th>
          <th>Featured-2</th>
          <th>Levels-2</th>
      </tr>
    </table>
    <button type="button" class="btn btn-default btn-lg" id="addBtn">
<span class="glyphicon glyphicon-plus-sign"></span> Add Courses
</button>
    </div>
  );
}

export default adminTable;
