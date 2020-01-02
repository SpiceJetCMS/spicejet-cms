/* eslint-disable global-require */
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import fb from './images/social-icons/fb.png';
import insta from './images/social-icons/insta.png';
import twit from './images/social-icons/twit.png';
import yt from './images/social-icons/yt.png';
import callIcon from './images/icons/callIcon.svg';
import placeholders from './placerholder';

const styles = {
    topContainer: { flex: 1, marginHorizontal: 8 },
    topTitle: { fontSize: 16, fontWeight: '600' },
    flightsDescription: { fontSize: 12, lineHeight: 14, marginTop: 10, width: '90%', color: '#333333' },
    searchSection: { flexDirection: 'row', marginTop: 10 },
    optionsText: { fontSize: 12, color: '#333333', marginBottom: 4 },
    hotelSection: { flexDirection: 'row', marginTop: 10 },
    social: { display: 'flex',flexDirection: 'row', alignItems: 'center' },
    connect: { marginRight: 16, color: '#222222' },
    socialImage: { height: 25, width: 25, marginRight: 8 },
    reservations: { display:'flex', flexDirection: 'row', marginTop: 20 },
    security: { display:'flex', flexDirection: 'row', borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 10 },
    note: { fontSize: 11, fontWeight: '600', color: '#222222', marginHorizontal: 5 },
    noteText: { fontSize: 11, color: '#222222', marginHorizontal: 5 },
    cardImage: { width: 42, height: 25, marginRight: 10 },
    links: { display:'flex', flex: 0.5, flexDirection: 'row', height: 42, alignItems: 'center' },
    copyWrite: { fontSize: 13, color: '#666666' }
};

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends PureComponent {
    aboutUs = () => (
        <div style = {styles.topContainer}>
            <h2 style = {styles.topTitle}>About Us</h2>
            <div style = {{ flex: 1, marginTop: 20 }}>
                {
                    ['Corporate Overview', 'Fleet', 'Charter Request', 'Careers', 'Media Center'].map(item => (
                        <div style = {styles.optionsText}>{item}</div>
                    ))
                }
            </div>
        </div>
    );

    investors = () => (
        <div style = {styles.topContainer}>
            <h2 style = {styles.topTitle}>Investors</h2>
            <div style = {{ flex: 1, marginTop: 20 }}>
                {
                    ['Corporate Governance', 'Financial Information', 'Notices', 'Corporate Annoucements', 'Contact Information', 'Shareholding Pattern'].map(item => (
                        <div style = {styles.optionsText}>{item}</div>
                    ))
                }
            </div>
        </div>
    );

    contactUs = () => (
        <div style = {styles.topContainer}>
            <h2 style = {styles.topTitle}>Contact Us</h2>
            <div style = {{ flex: 1, marginTop: 20 }}>
                {
                    ['Airports', 'International Offices', 'Corporate Head Office', 'Advertise with Us', 'RFP'].map(item => (
                        <div style = {styles.optionsText}>{item}</div>
                    ))
                }
            </div>
        </div>
    );

    magazines = () => (
        <div style = {styles.topContainer}>
            <div style = {styles.topTitle}>SpiceRoute Magazines</div>
            <div style = {{ flex: 1, marginTop: 20 }}>
                {
                    ['September 2018', 'August 2018', 'July 2018', 'June 2018', 'May 2018', 'April 2018'].map(item => (
                        <div style = {styles.optionsText}>{item}</div>
                    ))
                }
            </div>
        </div>
    );

    socialLinks = () => (
        <div style = {styles.social}>
            <div style = {styles.connect}>Connect with us</div>
            <Link
                to = {placeholders.socialLinks.facebook}
                
            >
                <img
                    src = {fb}
                    style = {styles.socialImage}
                />
            </Link>
            <Link
                to = {placeholders.socialLinks.twitter}
                
            >
                <img
                    src = {twit}
                    style = {styles.socialImage}
                />
            </Link>
            <Link
                to = {placeholders.socialLinks.instagram}
            >
                <img
                    src = {insta}
                    style = {styles.socialImage}
                />
            </Link>
            <Link
                to = {placeholders.socialLinks.youtube}
            >
                <img
                    src = {yt}
                    style = {styles.socialImage}
                />
            </Link>
        </div>
    );

    reservations = () => (
        <div style = {styles.reservations}>
            <div>
                <div>Economy Reservations</div>
                <div style = {{ fontSize: 12, color: '#666666' }}>Kindly call us on:</div>

                <div style = {{ display: 'flex', marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <img src = {callIcon} />
                    <div style = {{ marginLeft: 8 }}>+91 987 180 3333</div>
                </div>
                <div style = {{ marginLeft: 24 }}>
                    <div>+91 965 400 3333</div>
                </div>
            </div>
            <div style = {{ marginLeft: 50 }}>
                <div>Business Class Reservations</div>
                <div style = {{ fontSize: 12, color: '#666666' }}>Kindly call us on:</div>
                <div style = {{ display: 'flex', marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                <img src = {callIcon} />
                    <div style = {{ marginLeft: 8 }}>+91 981 179 5555</div>
                </div>
            </div>
        </div>
    );

    downloadLinks = () => (
        <div style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
            <Link
                to = {placeholders.downloadLinks.android}
            >
                <img  src = {require('./images/icons/download-android.png')} style = {{ height: 30, width: 86 }} />
            </Link>
            <div style = {{ width: 8 }} />
            <Link
                to = {placeholders.downloadLinks.ios}
            >
                <img  src = {require('./images/icons/download-ios.png')} style = {{ height: 30, width: 86, marginLeft: 8 }} />
            </Link>
            <div style = {{ marginLeft: 8 }}>
                <div style = {{ fontSize: 16 }}>Download our mobile app</div>
                <div style = {{ fontSize: 12, color: '#666666' }}>Travel seamlessly with the SpiceJet app</div>
            </div>
        </div>
    );

    securityWarning = () => (
        <div style = {styles.security}>
            <div style = {styles.note}>Note:</div>
            <div style = {styles.noteText}>We log the IP addresses of the visitors on our website for security reasons.</div>
        </div>
    )

    copywriteSection = () => {
        const dot = () => (<div style = {{ opacity: 0.2, marginHorizontal: 10 }}>•</div>);
        return (
            <div style = {{ paddingVertical: 20 }}>
                <div style = {{ display: 'flex',flexDirection: 'row' }}>
                    <div style = {{ flexDirection: 'row', flex: 1 }}>
                        <img src = {require('./images/icons/visa.png')} style = {styles.cardImage} />
                        <img src = {require('./images/icons/master-card.png')} style = {styles.cardImage} />
                        <img src = {require('./images/icons/american-express.png')} style = {styles.cardImage} />
                        <img src = {require('./images/icons/diners-club.png')} style = {styles.cardImage} />
                        <img src = {require('./images/icons/discover.png')} style = {styles.cardImage} />
                    </div>
                    <div style = {styles.links}>
                        <div style = {{ fontSize: 12 }}>Home</div>
                        {dot()}
                        <div style = {{ fontSize: 12 }}>Privacy Policy</div>
                        {dot()}
                        <div style = {{ fontSize: 12 }}>Terms and Condition</div>
                        {dot()}
                        <div style = {{ fontSize: 12 }}>GST Information</div>
                        {dot()}
                        <div style = {{ fontSize: 12 }}>Sitemap</div>
                    </div>
                </div>
                <div style = {styles.copyWrite}>
                    <div>{`© Copyright Spicejet India. All Rights Reserved`}</div>
                    <div>{`Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV, Gurgaon, Haryana - 122016`}</div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div style= {{marginLeft: '5%'}}>
                <div style = {{ display: 'flex', paddingTop: 30, flexDirection: 'row', paddingBottom: 20 }}>
                    <div style = {{ flex: 5 }}>
                        <div style = {{ display: 'flex', flexDirection: 'row' }}>
                            {this.aboutUs()}
                            {this.investors()}
                            {this.contactUs()}
                            {this.magazines()}
                            <div style = {{flex: 2, paddingHorizontal: 16 }}>
                            {this.socialLinks()}
                            {this.reservations()}
                            {this.downloadLinks()}
                        </div>
                        </div>
                    </div>
                    
                </div>
                {this.securityWarning()}
                {this.copywriteSection()}
            </div>

        );
    }
}
