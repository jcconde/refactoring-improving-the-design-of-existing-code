import invoices from './data/invoices.json';
import plays from './data/plays.json';
import { CreateBill } from './services/create-bill';

for (const invoice of invoices) {
  console.log(new CreateBill().bill(invoice, plays));
}
