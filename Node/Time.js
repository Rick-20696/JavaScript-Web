//Temporarizar tarefas é importante para uma aplicação quando se tem tarefas que devem ser executadas com frequência.
//A diferença de usar um setTimeout é que essa não é tão fácil de tratar a tarefa como no node-schedule
const node_schedule = require('node-schedule');

//Para setar o tempo é usado a string no padrão chrom

//String:
// (*/5) -> Execute de 5 em 5 segundos
// (.. *) -> Em qualquer minuto
// (.. 9) -> Às 9 horas
// (.. *) -> Em dia do mês
// (.. *) -> Em qualquer mês
// (.. 3) -> Na terça feira; é como num array, índice 0 == domingo, índice 6 == sábado
function task () {
    console.log(`Run in ${new Date().getSeconds()}`);
}

const task1 = node_schedule.scheduleJob('*/5 * 9 * * 3', task);

//Cancelando a tarefa
setTimeout(() => {
    task1.cancel();
    console.log('Exited task');
}, 20000);

//Aplicando regras de recorrência
const rule = new node_schedule.RecurrenceRule();

//Aqui eu vou definindo os dias num range, onde os dias são organizados como no comentário anterior
//Eu posso definir varias propriedades de tempo, aqui eu só defini a hora e dia da semana
rule.dayOfWeek = [new node_schedule.Range(1, 5)];
rule.hour = 9

const task2 = node_schedule.scheduleJob(rule, task);
