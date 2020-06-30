'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dynamic-nested-sidenav-menu documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' : 'data-target="#xs-components-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' :
                                            'id="xs-components-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoiceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvoiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NofoundpageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NofoundpageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuotesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShipmentListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShipmentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' : 'data-target="#xs-injectables-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' :
                                        'id="xs-injectables-links-module-AppModule-c86d3376219811a4d87a5901ef64c4b9"' }>
                                        <li class="link">
                                            <a href="injectables/NavService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NavService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShipmentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ShipmentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TagService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Carrier.html" data-type="entity-link">Carrier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CarrierRate.html" data-type="entity-link">CarrierRate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerRate.html" data-type="entity-link">CustomerRate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Destination.html" data-type="entity-link">Destination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavItem.html" data-type="entity-link">NavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reference.html" data-type="entity-link">Reference</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShipmentInterface.html" data-type="entity-link">ShipmentInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Shipper.html" data-type="entity-link">Shipper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TrackingDetail.html" data-type="entity-link">TrackingDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Uplift.html" data-type="entity-link">Uplift</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/FilterPipe.html" data-type="entity-link">FilterPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});