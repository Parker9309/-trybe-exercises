const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const deliveryP = order.order.delivery.deliveryPerson;
const orderName = order.name;
const fone = order.phoneNumber;
const rua = order.address.street;
const num = order.address.number;
const apto = order.address.apartment;

const customerInfo = (order) => {
  const deliverMenssage = `Ola ${deliveryP}, entrega para: ${orderName}, Telefone ${fone}, R. ${rua}, Numero ${num}, AP: ${apto}.`
 console.log (deliverMenssage)
}
customerInfo(order);

const nameModifier = order.name = 'Luiz Silva'
const totalValue = order.payment.total = 50

const orderModifier = (order) => {
  const deliverMenssage = `Ola ${deliveryP}, o total de seu pedido de muzzarela, calabresa e Coca Zero é ${totalValue}`
  console.log (deliverMenssage)
}

orderModifier(order);