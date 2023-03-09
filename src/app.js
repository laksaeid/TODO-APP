import { Container } from '@/layout';
import { E } from '@/library';
import { drawer, Header, main , footer } from '@/components';



const App = () => {
  const app = E({
    tag: 'div',
    className: 'font-sans',
    child: [Header(), main(),drawer(),footer()],
  });
  return Container(app);
};

export default App;
