import './App.css';
import 'styled-components';
import React, { useState,useEffect} from 'react';

import DataTable, { createTheme } from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { tryGetDentists } from './redux/thunxsCreator';
import { getDentist } from './redux/reducer';
import { useLocalStorage  } from './useLocalStorage';

const App = () => {

  // Configurar los hooks
    const [dentists, setDentists] = useState( [] );
    const [q, setQ] = useLocalStorage( 'q','' );

  // Funcion para mostrar los datos
    const dispatch = useDispatch();
    const entities = useSelector((state) =>
        getDentist(state)
    );

    useEffect(() => {
        dispatch(tryGetDentists()); 
    }, [])

    useEffect(() => {
        setDentists(entities);
        console.log('Datos recuperados: ')
        console.log(entities)
    }, [entities])

    // Configurar las columnas del data table
    const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'NAME',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'SURNAME',
        selector: row => row.surname,
        sortable: true,
    },
    {
        name: 'GENDER',
        selector: row => row.gender,
        sortable: true,
    },
    {
        name: 'COUNTRY NAME',
        selector: row => row.country_name,
        sortable: true,
    },
    {
        name: 'EMAIL',
        selector: row => row.email
    },
    {
        name: 'CREATED AT',
        selector: row => row.created_at,
        sortable: true,
    },
    ];

    function search(rows) { 
        return rows.filter(
            (row) => 
                row.name.toLowerCase().indexOf(q) > -1 ||
                row.surname.toLowerCase().indexOf(q) > -1 ||
                row.country_name.toLowerCase().indexOf(q) > -1 ||
                row.created_at.indexOf(q) > -1
            );
     }

  // Mostrar los datos en el data table
  
    return (
        <div>
            <div>
                <label>Search </label>
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} 
                 />
            </div>
            <div>
                <div className="table-responsive">
                    <DataTable 
                    columns={columns}
                    data={search(dentists)}
                    title="Dentists"
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='600px'
                    responsive
                    theme='dark'
                    />
                </div>
            </div>
        </div>
    
    );
}

export default App;
