/*
var budgetcontroller = (function(){
    var x= 23;  //cannot be accessible from outside the fn 
    var add = function(a){
        return x + a;
    }
    return{  //closures & public
        publicTest: function(b){
            console.log(add(b));
        }
    }
})();



var UIController = (function(){


})();


//separation of concerns mean standalone


var controller = (function(budgetCtrl, UICtrl){
    var z = budgetCtrl.publicTest(5);
      return {
          anotherPublic: function(){
              console.log(z);
          }
      }
})(budgetcontroller, UIController);
*/

//BUDGET CONTROLLER
var budgetcontroller = (function(){
     
    var Expense = function(id,desc,value)
    {   
        this.id = id;
        this.desc = desc;
        this.value = value;
        this.percentage = -1;
    }
    var Income  = function(id,desc,value)
    {   
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    Expense. prototype.calcPercentage = function(totalIncome){
       if(totalIncome > 0)
       {
        this.percentage = Math.round((this.value / totalIncome) * 100);
       }else{
           this.percentage = -1;
       }

    };

    Expense. prototype.getPercentage = function(){
        return this.percentage;
    }
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(curr){
            sum += curr.value;
        });
        data.totals[type] = sum;
    };
    // var allExpenses = [];
    // var allINcomes = [];
    // var totalExpense = 0;
    
    var data = {
        allItems : {
        exp : [],
        inc : []
    },
    totals : {
        exp : 0,
        inc : 0
    },
    bugdet: 0,
    percentage: -1
}

return {
    addItem: function(type,desc,val){
        var newItem,id;
        //create new id
        if(data.allItems[type].length > 0){
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } 
        else {  
            id=0;
        }
        //create new item based on inc or exp type
        if(type === 'exp'){
        newItem = new Expense(id,desc,val);
        }
        else if(type === 'inc')
        {
            newItem = new Income(id,desc,val);
        }
        data.allItems[type].push(newItem);
        return newItem;
    },
    deleteItem: function(type, id){
        var ids, index;
        //[1, 2, 6, 8]
        //index of 6  = 3
        var ids = data.allItems[type].map(function(current){
                return current.id;
        });
        index = ids.indexOf(id);
        if(index !== -1){
            data.allItems[type].splice(index, 1);
        } 

    },
     calculateBudget: function(){
        // calculate total income and expenses
         calculateTotal('exp');
         calculateTotal('inc');
        //calculate the budget = income-expenses
           data.budget = data.totals.inc - data.totals.exp;
        //calculate the percentage of income that we spent
        if(data.totals.inc > 0)
        data.percentage = Math.round(data.totals.exp / data.totals.inc * 100);
        else
        data.percentage = -1;
     },

     calculatePercentages: function(){
            /*a=20
            b=10
            c=40
            income = 100
            a = 20/100 = 20%...*/
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },

            getPercentage: function() {
                var allP = data.allItems.exp.map(function(cur){
                    return cur.getPercentage(); 
                });
                return allP;

     },
     getBudget: function(){
        //object 
        return{
            budget: data.budget,
            totalInc : data.totals.inc,
            totalExp : data.totals.exp,
            percent : data.percentage

         }
     },
         testing : function(){
      console.log(data);
  }
};
})();

//UI CONTROLLER
var UIController = (function(){

      var DOMStr = {
          inputType: '.add__type',
          inputdesc: '.add__description',
          inputValue: '.add__value',
          addbtn: '.add__btn',
          incomeContainer: '.income__list',
          expenseContainer: '.expenses__list',
          budgetLabel: '.budget__value',
          incomeLabel: '.budget__income--value',
          expenseLabel: '.budget__expenses--value',
          percentLabel: '.budget__expenses--percentage',
          container: '.container',
          expPercLabel: '.item__percentage',
          dateLabel: '.budget__title--month'
      };

      var formatNum = function(no, type){
        /* +,-
        2 decimal place digit
        coma separating thousands*/
        var nSplit,int,dec,type;
        no = Math.abs(no);
        no = no.toFixed(2);

        nSplit = no.split('.');
        int  = nSplit[0];
        if(int.length > 3){
            int = int.substr(0,int.length-3) + ',' + int.substr(int.length-3,3);
        }
        dec = nSplit[1];

        return (type === 'exp' ? '-' : '+') + int  + '.' + dec;
     };
     var nodeListforEach = function(list, callback){
        for(var i=0;i<list.length;i++){
            callback(list[i], i);
        }
    };
        return {
            getInput: function(){
                return {
                type: document.querySelector(DOMStr.inputType).value,
                desc: document.querySelector(DOMStr.inputdesc).value,
                value: parseFloat(document.querySelector(DOMStr.inputValue).value)
                };
            },
         
            addListItem: function(obj , type){
                    var html,newHtml,element;
                // create HTML string with placeholder text
                if(type === 'inc'){
                    element = DOMStr.incomeContainer;
               html =  '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }
                else if(type === 'exp'){
                    element = DOMStr.expenseContainer;
               html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }
               //Replace the placeholder text with some actual data
                    newHtml = html.replace('%id%', obj.id);
                    newHtml = newHtml.replace('%description%', obj.desc);
                    newHtml = newHtml.replace('%value%',formatNum(obj.value, type));
                //Insert the HTMl into the DOM

                document.querySelector(element).insertAdjacentHTML('beforeEnd', newHtml);
            },
            deleteListItem: function(selectID){
                var el = document.getElementById(selectID);
                el.parentNode.removeChild(el);
            },
         //public method
         clearfields : function(){
              var fields, fieldsArr;
              fields = document.querySelectorAll(DOMStr.inputdesc + ',' + DOMStr.inputValue);
              //all fields would be cleared at once
              fieldsArr = Array.prototype.slice.call(fields);
              //array is fieldsArray
              fieldsArr.forEach(function(curr, index, array){
                  curr.value = "";

              });
              fieldsArr[0].focus();
         },

         displayBudget: function(obj) {
              
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMStr.budgetLabel).textContent = formatNum(obj.budget,type);
            document.querySelector(DOMStr.incomeLabel).textContent = formatNum(obj.totalInc,'inc');
            document.querySelector(DOMStr.expenseLabel).textContent = formatNum(obj.totalExp,'exp');
         
            if(obj.percent > 0)
            document.querySelector(DOMStr.percentLabel).textContent = obj.percent + '%';
            else
            document.querySelector(DOMStr.percentLabel).textContent = '---';
         },

         displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStr.expPercLabel);
            
            nodeListforEach(fields, function(curr, i){
                if(percentages[i] > 0)
                curr.textContent = percentages[i] + '%';
                else
                curr.textContent = '---';

            });
         },

         displayMonth: function(){
             var now, yr, month ;
             now = new Date();
             months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              month = now.getMonth();
             yr = now.getFullYear();

             document.querySelector(DOMStr.dateLabel).textContent = months[month] + ' ' + yr;

         },

         changeType : function(){
            var f = document.querySelectorAll(DOMStr.inputType + ',' + DOMStr.inputdesc + ',' + DOMStr.inputValue);
            nodeListforEach(f, function(cur){
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMStr.addbtn).classList.toggle('red');
         },
         getDOMStr: function(){
            return DOMStr;
        }
    };
    

})();
//DRY----->DONOT REPEAT YOURSELF:)

//GLOBAL APP CONTROLLER
var controller= (function(budgetCtrl, UICtrl){
    var setupEventListeners = function(){
    var DOM = UICtrl.getDOMStr();  

    document.querySelector(DOM.addbtn).addEventListener('click',ctrlAddItem);
    document.addEventListener('keypress',function(event){
      //console. log(event);
      if(event.keyCode === 13 || event.which ===13){
           ctrlAddItem();
      }       
      
    });

    document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
};
    
  var updateBudget = function(){
         //1. calculate budget
            budgetCtrl.calculateBudget();
         //2. return the budget
            var budget = budgetCtrl.getBudget();
         //3. Display the budget on the UI
            UICtrl.displayBudget(budget);
  };
    

        var updatePercentages = function(){

                //1. calculate percentages
                budgetCtrl.calculatePercentages();

                //2. Read percentages from the budget controller
                var percentages = budgetCtrl.getPercentage();

                //3. update the UI with the new percentages
                UICtrl.displayPercentages(percentages);
        }
        var ctrlAddItem = function(){
         //1. get the field input data
         var input,newItem;
         input = UICtrl.getInput();
            // console.log(input);
            if(input.desc !== "" && !isNaN(input.value) && input.value > 0){
         //2. get the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.desc, input.value);
            
         //3.add the item to the UI
            UICtrl.addListItem(newItem, input.type);

         //4. clear the fields
            UICtrl.clearfields();

         //5. calculate and update budget
            updateBudget();
        
         //6. calculate and update the percentages
            updatePercentages();
            }
        
        };

    //   document.querySelector('.add__btn').addEventListener('click',function(){
    //   console.log('button was clicked');
    //   });

    var ctrlDeleteItem = function(event){
        var itemId, splitId, type, ID;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemId){
            //inc-1
            splitId = itemId.split('-'); 
            type = splitId[0];
            ID = parseInt(splitId[1]);

            //1. delete the item form the datastructure
           budgetCtrl.deleteItem(type, ID);

            //2. delete the item from the UI
            UICtrl.deleteListItem(itemId);
            
            //3. update and show the new budget
            updateBudget();

             //4. calculate and update the percentages
             updatePercentages();
        }
    };
       return{
           init: function(){
            //    console.log("app started");
            UICtrl.displayMonth();
               UICtrl.displayBudget({
                budget: 0,
                totalInc : 0,
                totalExp : 0,
                percent : -1
               });
               setupEventListeners();
           }
       };
})(budgetcontroller,UIController);
controller.init();
