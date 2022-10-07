Vue.component('v-select', VueSelect.VueSelect);
const { jsPDF } = window.jspdf;

window.onload = () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
    
        // loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    
    
      });
}


new Vue({
    el: '#app',
    data() {
        return {
            icons: window.icons,
            asd: [],
            questionsList: [
                {
                    id: 1, 
                    name: 'Территориальное расположение', 
                    options: [
                        {
                            id: 1,
                            question: 'Выберите - где вы хотите построить дом', 
                            answers: ['*пер. Ясный - ул. Железнякова в г. Хабаровске', '*с. Мичуринское', 'с. Гаровка 1'],
                            value: '',
                            isChecked: false,
                            questType: 'select', 
                        },
                    ],
                    icon: icons.location,
                    isChecked: false
                },

                {   id: 2, 
                    name: 'Земельный участок', 
                    options: [
                        { id: 2,
                            question: 'У вас есть земельный участок для постройки?', 
                            answers: ['Да, есть в собственности', 'Уже выбрал, планирую приобрести', 'Нет, выбираю варианты'],
                            value: '', 
                            isChecked: false,
                            questType: 'radio', 
                        },
                            {   
                                id: 3,
                                question: 'Вид разрешенного использования выбранного Вами земельного участка позволяет строить дом?',
                                answers: ['Да', 'Нет', 'Не знаю'],
                                value: '', 
                                isChecked: false,
                                questType: 'radio',
                            }
                    ],
          
                    icon: icons.land,
                    isChecked: false
                },
                
                {   id: 3, 
                    name: 'Поиск проекта', 
                    options: [
                        { id: 4,
                            question: 'Нужна ли Вам помощь в поиске проекта строительства?', 
                            answers: ['Да, возможно', 'Нет, помощь не нужна'],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                         },
                         {
                            id: 5,
                            question: '', 
                            sub:  [ 
                                {sys_name: 'Рекомендованные', list: ['ЖБИ-4'], value: ''},
                                {sys_name: 'Другие', list: ['ООО "АА-Ярило"',
                                'ООО Завод КПД 100',
                                'ОАО "Хабаровский завод промышленного и гражданского строительства"'],value: '',},
                                 ],
                            answers: [],
                            subValue: '',
                            value: '', 
                            isChecked: false,
                            questType: 'select',
                         },
                    ],
                    icon: icons.search,
                    isChecked: false
                },
                {   id: 4, 
                    name: 'Выбор проекта (переключение на каталог типовых проектов конкретного застройщика)', 
                    options: [
                        { id: 6,
                            question: 'Выбор проекта (переключение на каталог типовых проектов конкретного застройщика)', 
                            answers: ['https://xn--h1aieheg.xn--d1aqf.xn--p1ai/igs/project?page=1&region=27&size=12&sort=contestWinner%2CDESC&sort=published%2CDESC'],
                            value: '', 
                            isChecked: false,
                            questType: 'link',
                            subOptions: {},
                        }
                    ],
                    icon: icons.project,
                    isChecked: false
                },
                {   id: 5, 
                    name: 'Подключение дома к сетям', 
                    options: [
                        { id: 7,
                            question: 'Вам потребуется подключение дома к сетям инженерно-технического обеспечения?', 
                            answers: ['Да', 'Нет', 'Не знаю'],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                            subOptions: {},
                        }
                    ],
                    icon: icons.net,
                    isChecked: false
                },
                {   id: 6, 
                    name: 'Внутрення отделка помещения', 
                    options: [
                        { id: 18,
                            question: 'Вам потребуется подключение дома к сетям инженерно-технического обеспечения?', 
                            answers: ['Да', 'Нет'],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                            subOptions: {},
                        }
                    ],
                    icon: icons.repair,
                    isChecked: false
                },
                {   id: 7, 
                    name: 'Уведомление о планируемом строительстве', 
                    options: [
                        { id: 9,
                            question: 'Уведомление о планируемом строительстве', 
                            answers: ['Да', 'Нет', ],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                            subOptions: {},
                        }
                    ],
                    icon: icons.notification,
                     isChecked: false
                },

                {   id: 8, 
                    name: 'Акты подключения дома к сетям', 
                    options: [
                        { id: 10,
                            question: 'Акты подключения дома к сетям', 
                            answers: ['Да', 'Нет',],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                            subOptions: {},
                        }
                    ],
                    icon: icons.treaty,
                    isChecked: false
                },
                {   id: 9, 
                    name: 'Уведомление об окончании строительства', 
                    options: [
                        { id: 11,
                            question: 'Уведомление об окончании строительства', 
                            answers: ['Да', 'Нет', ],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                            subOptions: {},
                        }
                    ],
                    icon: icons.endConstruction,
                    isChecked: false
                },
                {   id: 10, 
                    name: 'Поиск ипотеки', 
                    options: [
                        { id: 16,
                            question: 'За счет каких средств Вы планируете строительство дома?', 
                            answers: ['С использованием кредитных средств', 'Другое'],
                            value: '', 
                            isChecked: false,
                            questType: 'radio',
                            subOptions: {},
                        },
                        {
                            id: 15, 
                            question: 'Рассчитать стоимость', 
                            questType: 'calc', 
                            sub: [
                                {id: 1, sys_name: 'total_cost', text: "Общая стоимость квартиры, руб", value: ''},
                                {id: 2, sys_name: 'percent', text: "Процентная ставка, %", value: ''},
                                {id: 3, sys_name: 'start_payment', text: "Первоначальный взнос, руб", value: ''},
                                {id: 4, sys_name: 'duration', text: "Срок ипотеки, лет", value: ''},
                            ],
                        
                            value: 'С использованием кредитных средств',
                            isChecked: false
                        },
                    ],
                   
        
                    icon: icons.calculator,
                    isChecked: false
                },
                {   id: 11, 
                    name: 'Соглашение с АО "Застройщик.27" по строительству ИЖД с комплектом Приложений загруженных на сайт в pdf', 
                    options: [
                        { id: 20,
                            question: '', 
                            answers: [],
                            value: '', 
                            isChecked: false,
                            questType: 'button',
                            subOptions: {},
                        }
                    ],
                    icon: icons.agreement,
                    isChecked: false
                },
               
          
            ],
            currentQuestion:'',
          
            isQuestWasOpened: [],
            monthPay: 1,
            variants:  ['Лично клиентом со всеми правоустанавливающими документами', 'По почте нарочно', 'Через личный кабинет госуслуг' ],
            selectValue: false
          
           
        }
    },
    methods: {
        getCurrentItem(item) {
            this.currentQuestion = item
        },
        setNextQuestion(item, idx) {
            // debugger
            this.questionsList = this.questionsList.map(el => {
                if (el.id == item.id) {
                    return {
                        ...el,
                        options: el.options.map(option => ({...option, isChecked: true})),
                        isChecked: true
                    }
                }
                return el
               })
               
               let nextEl =  this.questionsList.find((el, index) => index == idx+1)
               this.currentQuestion = nextEl
               this.filteredCurrentQuestion = nextEl
    
        },
        goToNext(item, idx, quest, questIdx, falseSelectedValue) {
            if (this.questionsList[idx].options.length == 1) {
                console.log('если  в квестлисте options == 1')
                    this.setNextQuestion(item, idx)
       
                    console.log('if')
            } else  if (this.questionsList[idx].options.length > 1 ) {
                   if (this.questionsList[idx].options.lastIndexOf(quest) != 0 || quest.value != quest.answers[0]) {

                    if (quest.value == 'Нет, выбираю варианты') {
                        if (falseSelectedValue) {
                       
                            this.currentQuestion.options[questIdx].isChecked == true
                            this.setNextQuestion(item, idx)
                         } else {
                            this.selectValue = true
                         }
                          
                    } else {
                        this.currentQuestion.options[questIdx].isChecked == true
                        this.setNextQuestion(item, idx)
                    }
                  
                       
                   } else {
          
                    this.currentQuestion.options[questIdx].isChecked == true
                    let nextEl =  this.currentQuestion.options.find((el, index) => index == questIdx+1)
                    this.currentSubQuestions.push(nextEl)
                   }
               
        }
 
        },
        notInQuestOpened(item) {
            return !this.isQuestWasOpened.includes(item.id)
        },
 
        numberFormat(value) {
            return new Intl.NumberFormat().format(value);
        },
        downloadPdf(cb) {
            // const doc = new jsPDF();
            // doc.addFont("../css/Roboto-Regular.ttf", "PTSans", "normal");
            // doc.setFont("PTSans");
            // doc.setFontSize(16);
            // doc.text("Договор №123456 "  , 10, 10);
            //     doc.save("two-by-four.pdf");

            const link = document.createElement('a');
            link.setAttribute('href', cvs.toDataURL('image/png'));
            link.setAttribute('download', 'image.png');
            link.click();
            return false;
                
        }
    },
    watch: {
        currentQuestion: {
            handler(val, oldval) {
              let a =  this.questionsList.find(el => el.id == val.id)
              this.currentQuestion = a
            },
            deep: true
        }
    },
    computed: {
        isLastElChecked() {
            let a = this.questionsList.slice(-1)[0]
          return a.isChecked

          
        },
        filteredQuests() {
            return this.questionsList
        },
        currentSubQuestions: {
            get() {
                let data = []

                if (this.currentQuestion.options.length > 0) {
                    data.push(this.currentQuestion.options[0])
                }

                return data
            }, set(val) {
                    return val
            }
                
        } ,
        filteredCurrentQuestion: {
            get() {
                let data = this.currentQuestion

                if (data.options.length > 1) {
                    data = {
                        ...data, 
                        options: this.currentSubQuestions
                    }
                }
                  return data 
            },
            set(val) {
              
                this.currentQuestion = val
            }

        },
        creditSum() {
            let value = 0
            
            let totalCost = +this.currentSubQuestions[1].sub.find(el => el.sys_name == 'total_cost').value
            let startPayment = +this.currentSubQuestions[1].sub.find(el => el.sys_name == 'start_payment').value

            value = totalCost - startPayment

            return value
        },

        monthPayment() {
           
            let value = 0
            let duration = +this.currentSubQuestions[1].sub.find(el => el.sys_name == 'duration').value *12
            let percent = +this.currentSubQuestions[1].sub.find(el => el.sys_name == 'percent').value
            let monthPercent = percent / 12 / 100

            let any = Math.pow((1 + monthPercent), duration)
    
            value = Math.abs(value)

            if (any > 0 && (duration != 0 || duration != '')) {
                value= +this.creditSum * (monthPercent * any / (any - 1));
            }
                return   value.toFixed(2)
        },
    }
    
})