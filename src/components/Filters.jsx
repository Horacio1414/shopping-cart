import { useState, useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters.jsx"

export function Filters () {

    const {filters, setFilters} = useFilters()

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categotyFilterId = useId()

    const handleChangeMinPrice = (event) => {
        
        setFilters(prevState =>( {
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event)=> {
        setFilters(prevState=> ({
            ...prevState,
            category:event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
            </div>
            <span>${filters.minPrice}</span>
            <div>
                <label htmlFor={categotyFilterId}>Category</label>
                <select id={categotyFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">smartphones</option>
                </select>
            </div>
        </section>
    )
}