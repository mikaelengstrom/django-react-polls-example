import { hot } from 'react-hot-loader'

require('./index.js');

for (const x of Object.keys(Containers)) {
    Containers[x] = hot(module)(Containers[x]);
}
