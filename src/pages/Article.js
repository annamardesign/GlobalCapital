import '../App.css';
import arrowLeft from '../img/arrowLeft.svg';
import articleImg from '../img/mountains.png';
import articleImgSmall from '../img/mountains_small.png';
import bookmark from '../img/bookmark.svg';
import share from '../img/share.svg';
import NavigationRow from '../components/NavigationRow';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Article() {
  return (
    <div className='article__wrapper'>
      <header className='article__header'>
        <NavigationRow order={0} className='article__menu' />
      </header>
      <div className='article__section'>
        <div className='back'>
          <img src={arrowLeft} className='arrow-left' alt='arrow-left' />
          &nbsp;People News
        </div>
        <h1 className='article__title'>
          ‘Novel’ Zambia clause could give bondholders further
          <br /> boost in debt restructuring
        </h1>
        <h4 className='article__subtitle'>
          Storied debut borrower sees ample demand as it spins off from Telekom
          Austria ample
          <br /> demand as it spins
        </h4>
        <div className='article__from_mobile'>
          <div className='author'>
            <p>
              By <mark>Mike Turner</mark>
            </p>
            <p>July 06, 2023</p>
          </div>
          <div className='icons'>
            <img src={bookmark} className='icon' alt='bookmark' />
            <img src={share} className='icon' alt='share' />
          </div>
        </div>
        <div className='page'>
          <main className='article'>
            <picture className='article__pic'>
              <source srcSet={articleImgSmall} media='(max-width: 600px)' />
              <img
                srcSet={(articleImgSmall, articleImg)}
                alt='mountain-picks'
              />
            </picture>
            <figcaption>
              Caption of the image;| Author credits Credits on second row if too
              long
            </figcaption>
            <article>
              <p>
                Austria’s A1 Towers Holding, a telecoms infrastructure company,
                became the most recent debut issuer in Europe’s high grade
                corporate bond market on Thursday, although ratings agencies
                warned that leverage as high as 7.6 times is putting pressure on
                its creditworthiness. A1 Towers Holding, freshly first time
                rated Baa2 with Moody’s and BBB- with Fitch, opened books on a
                €500m no grow July 2028 (five year) bond at 220bp over
                mid-swaps.{' '}
              </p>
              <p>
                XA1 Towers Holding, freshly first time rated Baa2 with Moody’s
                and BBB- with Fitch, opened books on a €500m no grow July 2028
                (five year) bond at 220bp over mid-swaps.
              </p>
              <p>
                Citi, Santander and UniCredit were global coordinators and
                joined in the bookrunner group by BBVA, Erste Group and
                IMI-Intesa Sanpaolo.
              </p>
              <p>
                The trade came as A1 Towers Holding is being spun off from
                Telekom Austria to a new entity EuroTeleSites, with no recourse
                to its old owner afterwards. The spin-off is expected in the
                second half of this year. The bond will be used to pay for
                expenses relating to the spin-off.
              </p>
              <p>
                A1 Towers Holder has around 7.6 times net leverage, according to
                Fitch estimates, while Moody’s puts leverage at 6.6 times.
                Moody’s expects this to fall to 5.4 times in 2025.{' '}
              </p>
              <p>
                Both ratings agencies flagged the high leverage as putting
                pressure on the company’s rating, though both agencies have it
                on a stable outlook.{' '}
              </p>
              <p>
                “Given the high initial leverage, the rating is initially weakly
                positioned in the category, with limited room for deviation
                relative to our expectations," said Carlos Winzer, Moody's lead
                analyst for A1 Towers.{' '}
              </p>
              <p>
                The market has been fickle for issuers with lower ratings or
                more challenging stories. German family holding company Franz
                Haniel & Cie pulled a sub-benchmark deal last week, Porsche
                Automobil did not manage to fully subscribe its €500m September
                2027s, and Italian energy company Alperia priced a trade in line
                with initial price thoughts.{' '}
              </p>
              <p>
                However, investors were keen to buy A1 Towers’ debt with €1.8bn
                of demand by the time guidance was announced at 195bp to 200bp
                over mid-swaps. “You need about three times covered at guidance
                for a deal to be a success at the moment,” said a syndicate
                banker in London off the trade. “Otherwise it gets a bit shaky
                when you close books.”
              </p>
              <h2>State stake key</h2>
              <p>
                A1 Towers is around a quarter owned by the Austrian government,
                and after the spin-off, will be 28.43% owned by Austrian
                sovereign wealth fund Österreichische Beteiligungs. America
                Movil is the biggest shareholder. “The state ownership is an
                important factor,” said a syndicate banker off the trade in
                London. “It’s not really a proxy for Austrian sovereign debt,
                but it will help sell the story to investors.”{' '}
              </p>
              <p>
                Without Austrian state ownership, A1 Towers would be junk rated
                by Fitch and Baa3 by Moody’s. The latter agency sees Austria’s
                ownership as so fundamental that it qualifies the company as a
                government-related issuer.
              </p>{' '}
              <p>
                While A1 Towers is being spun off from Telekom Austria, it still
                has a large backlog of contracts with the company, which helps
                buoy the rating. A1 Towers is active outside of Austria, in
                Bulgaria, Croatia, Serbia, Slovenia and North Macedonia, with
                these countries providing around 40% of the company’s revenues
                and Ebitda.
              </p>
            </article>
            <h5>Topics</h5>
            <div className='tags'>
              <span>Corporate Bonds</span>
              <span>High grade and crossover bonds</span>
              <span>Euro</span>
              <span>Europe</span>
              <span>Australia</span>
              <span>Emerging Markets</span>
            </div>
          </main>
          <aside className='side'>
            <div className='article__from'>
              <p>
                By <mark>Mike Turner</mark>
              </p>
              <p>July 06, 2023</p>
              <div className='icons'>
                <img src={bookmark} className='icon' alt='bookmark' />
                <Link to='' className='gift'>
                  Gift article
                </Link>
                <img src={share} className='icon' alt='share' />
              </div>
            </div>
            <div className='article__related'>
              <h3>Related</h3>
              <hr className='line' />
              <p>IFC becomes first borrower to price off the Sofr</p>
              <hr className='line' />
              <p>468 Spac I merges with Boxine</p>
              <hr className='line' />
              <p>Retail bonds — be careful what you wish for</p>
              <hr className='line' />
              <p>Banks frontload in euros ahead of ECB meeting</p>
              <hr className='line' />
            </div>
          </aside>
        </div>
      </div>
      <footer className='article__footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Article;
