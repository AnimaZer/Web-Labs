var cashbox = {
  amount: 0,
  addPayment: function (payment) {
    // your code
    if (payment.info !== 0) {
      if (payment.amount > 0 && typeof payment.amount === 'number') {
        this.amount = this.amount + payment.amount;
        console.log('Баланс кассы: ' + this.amount + ' руб.');
      } else {
        console.log('Ошибка платежа: ' + payment.info);
        console.log('Баланс кассы: ' + this.amount + ' руб.');
      }
    }
  },
  refundPayment: function (refund) {
    // your code
    if (refund.info !== 0) {
      if (this.amount > 0 && this.amount - refund.amount >= 0) {
        this.amount = this.amount - refund.amount;
        console.log('Баланс кассы: ' + this.amount + ' руб.');
      } else {
        console.log('ERROR');
        console.log('Баланс кассы: ' + this.amount + ' руб.');
      }
    }
  }
};

cashbox.addPayment({
  amount: -10,
  info: 'Оплата штрафа'
}); // show error (console), amount not affected
cashbox.addPayment({
  amount: 10,
  info: 'Оплата ЖКХ'
}); // cashbox amount = 10

cashbox.refundPayment({
  amount: 10,
  info: 'Возврат клиенту'
}); // cashbox amount = 0
cashbox.refundPayment({
  amount: 10,
  info: 'Возврат клиенту'
}); // cashbox amount not affected (warning)