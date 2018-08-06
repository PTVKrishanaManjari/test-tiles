
function loadJSON() {
    var data_file = "tiles.json";
    var http_request = new XMLHttpRequest();
    http_request.onreadystatechange = function() {

        if (http_request.readyState == 4) {
            //console.log(http_request.responseText);
            var jsonObj = JSON.parse(http_request.responseText);
            for (var i = 0; i <jsonObj.length; i++) {
                var divelement = document.createElement("div");
                divelement.style.display="inline-block";
                divelement.style.paddingLeft="15px";
                divelement.style.paddingTop="10px";
                divelement.id = "sp" + i;


                var divinner = document.createElement("div");
                divinner.style.background="white";
                divinner.style.display="block";
                divinner.id="divinner"+i;
                console.log(divinner.length);
                //creating paragraph

                var title = document.createElement("p");
                title.innerHTML = jsonObj[i].title;
                title.style.display="block";

                title.id = "title"+i;

                var description = document.createElement("p");
                description.innerHTML = jsonObj[i].description;
                // description.style.display="block";
                description.id="description"+i;
                description.style.display="block";

                var detailsdata = document.createElement("p");
                detailsdata.innerHTML = jsonObj[i].details.version;
                detailsdata.id="detailsdata"+i;
                detailsdata.style.display="none";

                var detailsize = document.createElement("p");
                detailsize.innerHTML= jsonObj[i].details.size;
                detailsize.id="detailsize"+i;
                detailsize.style.display="none";

                var productIcon = document.createElement("img");
// console.log(jsonObj[i].productIcon);
                productIcon.id="productIcon"+i;
                productIcon.style.display="block";
                productIcon.style.height="55px";
                productIcon.style.width="55px";

                productIcon.innerHTML = productIcon.setAttribute("src",jsonObj[i].productIcon);

                //creating delete button

                var deletebutton = document.createElement("input");
                deletebutton.setAttribute('type', 'button');
                deletebutton.setAttribute('value', 'delete');
                deletebutton.style.display="block";
                deletebutton.style.position="relative";
                deletebutton.style.left="291px";



                var details = document.createElement("input");
                details.setAttribute('type', 'button');
                details.setAttribute('value', 'details');
                details.id=i;
                details.style.display="block";
                details.style.position="relative";
                details.style.top="-17px";

                 // details.setAttribute("click","details(jsonObj)");
                // details.href="details.html";
                details.onclick=function () {

                    var current=event.target.id;
                    var div = document.createElement("div");
                   var version= document.getElementById("detailsdata"+current);
                   var size = document.getElementById("detailsize"+current);
                    var icon = document.getElementById("productIcon"+current);
                    var titles = document.getElementById("title"+current);
                    var des = document.getElementById("description"+current);
                    div.style.marginLeft="300px";
                    version.style.display="block";
                    size.style.display="block";
                    icon.style.display="block";
                    titles.style.display="block";
                    des.style.display="block";

                    var data=document.getElementById("details");
                    div.append(titles);
                    div.append(icon);
                    div.append(des);
                    div.append(version);
                    div.append(size);

                    data.append(div);


                    document.getElementById("Name").style.display="none";




                };
                //delete functionality

                deletebutton.onclick = function() {
                    this.parentElement.remove();
                }
                divinner.append(title);
                divinner.append(description);
                divinner.append(productIcon);
                divinner.append(detailsdata);
                divinner.append(detailsize);
                divinner.append(deletebutton);
                divinner.append(details);
                divelement.append(divinner);
                var t = document.getElementById("Name");
                t.append(divelement);
            }
        //     function details(){
        //         for(i=0;i<jsonObj.length;i++){
        //
        //         }
        // }
    }


    }



    http_request.open("GET", data_file, true);
    http_request.send();
}