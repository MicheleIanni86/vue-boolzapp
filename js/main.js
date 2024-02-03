// START SCRIPT VUEJS-------------------------------------------------------------------------------------------
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:55',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                }
            ],

            searChat: "",
            currentContact: 0,


            newMsg: {
                date: '',
                message: '',
                status: 'sent'
            },
        };
    },

    methods: {
        lastAccessMessage(messages) {
            const sentMsgs = messages.filter((message) => {
                return message.status == 'sent';
            });
            const lastMsg = sentMsgs[sentMsgs.length - 1];
            return lastMsg.date;
        },

        changeCurrentUser(index) {
            this.currentContact = index;
        },

        newDateNow() {
            const newDates = new Date();
            return `${newDates.getDate().toString().padStart(2, '0')}/${(newDates.getMonth() + 1).toString().padStart(2, '0')}/${newDates.getFullYear()} ${newDates.getHours().toString().padStart(2, '0')}:${newDates.getMinutes().toString().padStart(2, '0')}:${newDates.getSeconds().toString().padStart(2, '0')}`;
        },

        newMsgSend() {
            const newMsg = { ...this.newMsg };
            newMsg.date = this.newDateNow();
            this.contacts[this.currentContact].messages.push(newMsg);
            this.newMsg.message = '';

            setTimeout(this.automaticResponse, 1500);
        },

        automaticResponse() {
            const messageReceiveNew = {
                message: 'Mi dispiace non ti conosco!',
                date: this.newDateNow(),
                status: 'received',
            };

            this.contacts[this.currentContact].messages.push(messageReceiveNew);

        },
    },

}).mount('#root');
// END SCRIPT VUEJS-------------------------------------------------------------------------------------------

