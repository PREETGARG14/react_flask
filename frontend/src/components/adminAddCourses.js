import React from "react";
import './adminAddCourses.css';


function adminAddCourses() {

  return (


<form action=" ">
  <label for="title">Title</label>
  <input type="text" id="title" name="Title"><br>
  <label for="tags">Tags</label>
  <input type="text" id="tags" name="tags"><br><br>
  <label for="categories">Categories</label>
  <input type="text" id="categories" name="categories"><br><br>
  <label for="link">Link</label>
  <input type="text" id="link" name="link"><br><br>
  <label for="type">Type</label>
  <input type="text" id="type" name="type"><br><br>
  <label for="Featured">Featured</label>
  <input type="text" id="featured" name="featured"><br><br>
  <label for="levels">Levels</label>
  <input type="text" id="levels" name="levels"><br><br>

  <input type="submit" value="Submit">
</form>


);
}

export default adminAddCourses;
