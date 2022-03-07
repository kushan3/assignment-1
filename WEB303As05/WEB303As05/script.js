/*
    Assignment 05
*/

$(document).ready(function () {
    class  ContentItem {

        constructor(id,name,description,category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }
        updateContentItem(name,description,category) {
            if(name) {
                this.name= name;
            }
            if(description) {
                this.description = description;
            }
            if(category) {
                this.category = category;
            }
        }
        toString() {
            return `
                    <div id="content-item-${this.id}">
                        <h2>${this.name}</h2>
                        <p>${this.description}</p>
                        <div>${this.category}</div>
                    </div>
                    `;
        }
    }
    console.log( ContentItem);
    
    let games = [ new  ContentItem (0, "Gta", "Multiplayer game for young", "Action"),
                    new  ContentItem (1, "2k20", "Fight game for boys", "Action"),
                    new  ContentItem (2, "Pub g", "Online multiplayer game", "Action"),
                    new  ContentItem (3, "Call of duty" , "Online multiplayer game", "Action"),
                    new  ContentItem (4, "Clash of clan", "games for children", "Adventure")
                  ];
    console.log(games);
    
    games.forEach(function(g, game) {
        $('#content-item-list').append(games[game].toString());
    });

});


