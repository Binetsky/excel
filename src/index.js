import {Excel} from '@/Components/excel/Excel';
import './scss/index.scss';
import {Header} from '@/Components/header/Header';
import {Toolbar} from '@/Components/toolbar/Toolbar';
import {Formula} from '@/Components/formula/Formula';
import {Table} from '@/Components/table/Table';

const excel = new Excel('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
});
excel.render();
