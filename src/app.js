import { Container } from '@/layout';
import { E } from '@/library';
import { drawer, Header, main, footer } from '@/components';
import { loading } from '@/screens';
const App = () => {
  const app = E({
    tag: 'div',
    className: 'font-sans',
    child: [Header(), main(), drawer(), footer(), loading()],
  });
  return Container(app);
};

export default App;
