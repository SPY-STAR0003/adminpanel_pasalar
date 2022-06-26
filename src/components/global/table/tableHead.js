import { useSelector, useDispatch } from 'react-redux'

export default function TableHead ({titles, slice, setIsSelectAll, setSelectedRows, bgColor = 'bg-gray-200 dark:bg-gray-900', textColor = 'text-gray-500 dark:text-white'}) {

    const {isSelectAll} = useSelector(state => state[slice])

    const dispatch = useDispatch()

    const selectAllHandler = () => {
        dispatch(setIsSelectAll(!isSelectAll))
        if (isSelectAll) dispatch(setSelectedRows([]))
    }

    return (
        <thead className={`${bgColor} ${textColor} select-none`}>
            <tr>
                <th className="w-0">
                    <div onClick={selectAllHandler} className={`${isSelectAll ? 'bg-indigo-700' : 'shadow-sm bg-gray-400/50 dark:bg-gray-400'} h-5 w-5 rounded-md cursor-pointer duration-500 mr-4`}>
                        {isSelectAll ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> : null}
                    </div>
                </th>
                {titles.map((title, index) => <th key={index} className="p-4 truncate">{title}</th>)}
            </tr>
        </thead>
    )
}