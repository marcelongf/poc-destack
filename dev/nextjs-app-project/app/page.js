import ContentProviderApp from './components/editor'
import { getStaticProps } from 'destack/build/server'

import { loadData } from '../utils/loadData';

export default async function Page() {
  // const props = await getStaticProps().then((d) => d.props)
  // console.log(props);

  const data = await loadData();
  return (
    <div style={{ height: '100%' }}>
      <ContentProviderApp data={data} />
    </div>
  )
}
