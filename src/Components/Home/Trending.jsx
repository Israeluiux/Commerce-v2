import jbl from '../../assets/jbl.jpg'
import mac from '../../assets/mac.jpg'
import iphone from '../../assets/iphone.jpg'
import Airpodpro from '../../assets/Airpodpro.jpg'
import TrendCard from './Trendingcard'

const Trending = () => {
    return(
            <section className="px-32 py-8">
                <p className="text-3xl mb-8">Explore Trending Categories</p>
                <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))'}}>
                    <TrendCard img={jbl} text="Music comes alive with JBL" />
                    <TrendCard img={mac} text="Mac touch and feels like heaven" />
                    <TrendCard img={iphone} text="Explore the world with an iphone from our store" />
                    <TrendCard img={Airpodpro} text="Noise cancellation at it's peak" />
                    
                </div>
            </section>
    )
}

export default Trending