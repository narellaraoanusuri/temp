import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bootstrap-demo';
  ngOnInit(){
    $(".navbar-toggle").off("click").on("click", function(){
      if($("#myNavbar").hasClass("in")){
        $("#myNavbar").removeClass("in")
      }else{
        $("#myNavbar").addClass("in")
      }
    })
  }
}
