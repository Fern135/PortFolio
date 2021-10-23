class Ajax {

    constructor(url) {
        this.url = url;
    }

    //#region fetch region 

    Get(id_dom) {
        fetch(this.url)
            .then(x => x.text())
            .then(y => $(`#${id_dom}`).html(y));
    }

    Post(data = {}) {
        // POST request using fetch()
        fetch(this.url, {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(data),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())// Converting to JSON
        .then(json => console.log(json));// Displaying results to console
    }

    //#endregion

    //#region jquery
    JGet(id_dom) {
        $(document).ready(function () {
            $.get(this.url, function (data, status) {
                $(`#${id_dom}`).html(data);
            });
        });
    }

    JPost(data = {}) {
        $.post(this.url,
            data,
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
    }
    //#endregion

    //#region old ajax

    OGet(id_dom) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById(id_dom).innerHTML =
                this.responseText;
        }
        xhttp.open("GET", this.url);
        xhttp.send();
    }

    OPost(data = {}) {
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", this.url);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(data));
    }

    //#endregion

}