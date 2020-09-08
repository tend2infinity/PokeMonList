import React from 'react'

export default function Pagination ({ toNextPage , toPrevPage }) {
    return (
        <div>
            { toPrevPage && <button onClick={toPrevPage}> Previous </button>}
            { toNextPage && <button onClick={toNextPage}>Next</button>}
        </div>
    )
}