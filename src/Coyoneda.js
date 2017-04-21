import daggy from 'daggy';

const compose = (f, g) => x => f(g(x));
const id = x => x;

const Coyoneda = daggy.tagged('x', 'f');

Coyoneda.prototype.map = function(f) {
  return Coyoneda(this.x, compose(f, this.f));
};

Coyoneda.prototype.lower = function() {
  return this.x.map(this.f);
};

Coyoneda.lift = x => Coyoneda(x, id);

export default Coyoneda;
