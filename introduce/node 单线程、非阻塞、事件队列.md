## 单线程  
  ***
  在了解单线程之前，应该知道进程、线程之间的区别  
  进程：程序运行中使用到的内存和资源的 ``` 分配 ```  
  线程：线程是一个执行流，对资源、内存、寄存器的 ``` 调度 ```  
  多线程：给每次事件或程序的执行分配多个线程或执行流、优点就是CPU利用率高，但缺点就是时间都消耗在I/O上面，java就是多线程  
  单线程：给A事件或程序的执行只分配一次执行流，单线程有一个优点就是I/O消耗的时间少，所以node.js作为服务器处理文件，运行和调度速度是很快的，javascript就是单线程的  
## 非阻塞  
  ***
  非阻塞：线程是永远执行的，当下线程的CPU利用率为100%，I/O是以事件方式通知的，A事件或程序执行，等遇到B事件或程序的执行，将A事件放入事件队列中，并返还一个回调函数，B事件或者程序执行完毕，语言引擎知道了，哦，你完成了。好的我根据A事件的回调函数再去执行A事件，这样是避免了阻塞  
  阻塞：当A事件或者程序被阻塞住，给其再分配一个线程，让A事件或程序继续执行，B事件或程序也继续执行  
## 事件队列  
  ***
  嗯，事件队列本身就是一个队列（FIFO），与栈(LIFO)不同，所有当事件阻塞时，将事件或程序放入队列，就像排队买票一样，先进入先出去。
