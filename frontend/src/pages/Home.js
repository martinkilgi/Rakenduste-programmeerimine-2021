import Item from '../components/Item'

function Home() {
    return (
        <div>
            Koduleht
            <Item name="Item1" price="40" category="mobiles" />
            <Item name="Item2" price="60" category="tablets" />
            <Item name="Item3" price="80" category="computers" />
        </div>
    )
}

export default Home;