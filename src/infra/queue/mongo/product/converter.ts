import { Product } from '../../../../domain/model/product';
import mongoUtils, { Converter } from '../../../../util/lib/mongodb/converter';
import { ProductDocument } from './doc';

function from({
  _id,
  name,
}: ProductDocument) {
  return new Product(
    _id.toHexString(),
   name,
  );
}

function to({ id,  name }) {
  return {
    _id: mongoUtils._id(id),
    name,
  };
}

const converter: Converter = {
  from,
  to,
};

export default converter;
