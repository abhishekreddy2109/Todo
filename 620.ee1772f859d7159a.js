(self.webpackChunktodoApp=self.webpackChunktodoApp||[]).push([[620],{6620:(g,r,s)=>{s.r(r),s.d(r,{BudgetplannerModule:()=>h});var c=s(7241),a=s(2533),e=s(6903);let l=(()=>{class t{constructor(){this.income=[],this.expenses=[]}getTotalIncome(){return this.income.reduce((o,n)=>o+n.amount,0)}getTotalExpenses(){return this.expenses.reduce((o,n)=>o+n.amount,0)}getBalance(){return this.getTotalIncome()-this.getTotalExpenses()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-budget-overview"]],inputs:{income:"income",expenses:"expenses"},decls:19,vars:0,consts:[[1,"budget-overview","card","p-3","shadow-sm"],[1,"section-title"],[1,"d-flex","justify-content-between","align-items-center"],[1,"income-box"],[1,"text-success"],[1,"fw-bold","fs-4"],[1,"expense-box"],[1,"text-danger"],[1,"balance-box"],[1,"text-primary"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2,"Budget Overview"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2)(4,"div",3)(5,"h5",4),e.\u0275\u0275text(6,"Income"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"p",5),e.\u0275\u0275text(8,"\u20b950,000"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"div",6)(10,"h5",7),e.\u0275\u0275text(11,"Expenses"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"p",5),e.\u0275\u0275text(13,"\u20b930,000"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(14,"div",8)(15,"h5",9),e.\u0275\u0275text(16,"Remaining Balance"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"p",5),e.\u0275\u0275text(18,"\u20b920,000"),e.\u0275\u0275elementEnd()()()())}})}}return t})(),m=(()=>{class t{constructor(){this.income=[]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-income"]],inputs:{income:"income"},decls:8,vars:0,consts:[[1,"income-section","card","p-3","shadow-sm","mt-4"],[1,"section-title","text-success"],[1,"list-group"],[1,"list-group-item"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2,"Income"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ul",2)(4,"li",3),e.\u0275\u0275text(5,"Salary: \u20b940,000"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li",3),e.\u0275\u0275text(7,"Freelancing: \u20b910,000"),e.\u0275\u0275elementEnd()()())}})}}return t})(),d=(()=>{class t{constructor(){this.expenses=[]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-expense"]],inputs:{expenses:"expenses"},decls:12,vars:0,consts:[[1,"expense-section","card","p-3","shadow-sm","mt-4"],[1,"section-title","text-danger"],[1,"list-group"],[1,"list-group-item"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2,"Expenses"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ul",2)(4,"li",3),e.\u0275\u0275text(5,"Rent: \u20b915,000"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li",3),e.\u0275\u0275text(7,"Groceries: \u20b95,000"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"li",3),e.\u0275\u0275text(9,"Utilities: \u20b93,000"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"li",3),e.\u0275\u0275text(11,"Entertainment: \u20b97,000"),e.\u0275\u0275elementEnd()()())}})}}return t})(),p=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-add-entry"]],decls:3,vars:0,consts:[[1,"add-entry","mt-4","text-center"],[1,"btn","btn-primary"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"button",1),e.\u0275\u0275text(2,"+ Add New Entry"),e.\u0275\u0275elementEnd()())}})}}return t})();const u=[{path:"",component:(()=>{class t{constructor(){this.title="budget",this.income=[{category:"Salary",amount:3e3},{category:"Freelance",amount:500}],this.expenses=[{category:"Rent",amount:1e3},{category:"Groceries",amount:200},{category:"Utilities",amount:150},{category:"Entertainment",amount:100}]}getTotalIncome(){return this.income.reduce((o,n)=>o+n.amount,0)}getTotalExpenses(){return this.expenses.reduce((o,n)=>o+n.amount,0)}getBalance(){return this.getTotalIncome()-this.getTotalExpenses()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-root"]],decls:13,vars:0,consts:[[1,"budget-planner","container","py-4"],[1,"header","text-center","mb-4"],[1,"title"],[1,"subtitle"],[1,"row","mt-4"],[1,"col-md-6"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"h2",2),e.\u0275\u0275text(3,"Budget Planner"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p",3),e.\u0275\u0275text(5,"Track your income and expenses efficiently"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(6,"app-budget-overview"),e.\u0275\u0275elementStart(7,"div",4)(8,"div",5),e.\u0275\u0275element(9,"app-income"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",5),e.\u0275\u0275element(11,"app-expense"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(12,"app-add-entry"),e.\u0275\u0275elementEnd())},dependencies:[l,m,d,p]})}}return t})()}];let x=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.\u0275\u0275defineNgModule({type:t})}static{this.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.RouterModule.forChild(u),a.RouterModule]})}}return t})(),h=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.\u0275\u0275defineNgModule({type:t})}static{this.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,x]})}}return t})()}}]);