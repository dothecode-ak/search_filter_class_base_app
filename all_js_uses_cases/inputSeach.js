function filterFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("inputForm");
            filter = input.value.toUpperCase();
            div = document.getElementById("serchIDdiv");
            a = div.getElementsByTagName("option");
            for (i = 0; i < a.length; i++) {
                txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        }