fetch('https://ncs-coding-class-2022-2023.s3.us-east-2.amazonaws.com/jelly-of-the-month.json',{mode: "cors"})
    .then((response) => response.json())
    .then((data) => {
        
        //as usually, immediatly log your data to see what you got.
        console.log(data);

        //replace fake text with the real catchphrase
        document.getElementById("catchphrase").textContent = data.catchphrase;

        //create a variable for our targetted insertions
        var tbody = document.getElementById("offer-table-body");

        //loop through all the offers in the feed
        for (const x of data.offers) { 

            //log this particular one
            console.log(x); 

            //make a new table column
            var classification = document.createElement("td");
                //set the contents of that new column
                classification.textContent = x.classification;

            //make a new table column
            var flavor = document.createElement("td");
                //set the contents of that new column
                flavor.textContent = x.flavor;

            //make a new table column
            var dt = document.createElement("td");
                //set the contents of that new column
                dt.textContent = x.date;                    

            //make an new row
            var row = document.createElement("tr");
                //all all those new table columns we just made to the row we made
                row.appendChild(classification);
                row.appendChild(flavor);
                row.appendChild(dt);

            //create a document fragment to add all the contents to for performance reasons
            var fragment = document.createDocumentFragment();
                //append our row to the fragement
                fragment.appendChild(row);

            //add the new fragment to the actual document's tbody
            tbody.appendChild(fragment);
        }

    });            
