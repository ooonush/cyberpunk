// NOTE: This definition file is auto generated - any changes you make will not be saved
// 04.05.2022 15:01:07

declare function runOnStartup(cb: (runtime: IRuntime) => void): void;

declare interface IRuntime {
    objects: IRuntimeObjects;
    addEventListener(eventName: 'tick' | 'beforeprojectstart' | 'afterprojectstart' | 'keydown' | 'keyup'
        | 'mousedown' | 'mousemove' | 'mouseup' | 'dblclick' | 'wheel' | 'pointerdown' | 'pointermove'
        | 'pointercancel' | 'deviceorientation' | 'devicemotion' | 'save' | 'load' | 'instancecreate'
        | 'instancedestroy', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'tick' | 'beforeprojectstart' | 'afterprojectstart' | 'keydown' | 'keyup'
        | 'mousedown' | 'mousemove' | 'mouseup' | 'dblclick' | 'wheel' | 'pointerdown' | 'pointermove'
        | 'pointercancel' | 'deviceorientation' | 'devicemotion' | 'save' | 'load' | 'instancecreate'
        | 'instancedestroy', callback: (...params: unknown[]) => void): void;
    dt: number;
    gameTime: number;
    getInstanceByUid(uid: any): IInstance | undefined
    globalVars: IGlobalVars;
    mouse?: IMouseObjectType;
    keyboard?: IKeyboardObjectType;
    touch?: ITouchObjectType;
    layout: ILayout;
    getLayout(layoutNameOrIndex: string | number): ILayout;
    getAllLayouts(): Array<ILayout>;
    goToLayout(layoutNameOrIndex: string | number): void;
    assets: IAssetManager;
    storage: IStorage;
    callFunction(name: string, ...params: unknown[]): unknown;
    setReturnValue(...params: unknown[]): void;
    projectName: string;
    projectionVersion: string;
    random(): number;
    wallTime: number;
    sortZOrder<T>(iterable: Array<T>, callback: (a: T, b: T) => boolean): void;
    invokeDownload(url: string, filename: string): void;
    isInWorker: boolean;
    alert(message: string): Promise<void>;
}
declare var IRuntime:  { new(): IRuntime };

type VariableType = Record<string, string | boolean | number | null | undefined>;

interface IRuntimeObjects {
	['ZoneMyBasa']: IObjectClass<IZoneMyBasa>;
	['WinText']: IObjectClass<IWinText>;
	['TrophiesText']: IObjectClass<ITrophiesText>;
	['Touch']: IObjectClass<ITouch>;
	['TimelineController']: IObjectClass<ITimelineController>;
	['Tilemap9']: IObjectClass<ITilemap9>;
	['Tilemap8']: IObjectClass<ITilemap8>;
	['Tilemap7']: IObjectClass<ITilemap7>;
	['Tilemap6']: IObjectClass<ITilemap6>;
	['Tilemap4']: IObjectClass<ITilemap4>;
	['Tilemap3']: IObjectClass<ITilemap3>;
	['Tilemap']: IObjectClass<ITilemap>;
	['TiledBackground5']: IObjectClass<ITiledBackground5>;
	['TiledBackground4']: IObjectClass<ITiledBackground4>;
	['TiledBackground3']: IObjectClass<ITiledBackground3>;
	['TiledBackground2']: IObjectClass<ITiledBackground2>;
	['TiledBackground']: IObjectClass<ITiledBackground>;
	['TextInput2']: IObjectClass<ITextInput2>;
	['TextInput']: IObjectClass<ITextInput>;
	['Text3']: IObjectClass<IText3>;
	['Text2']: IObjectClass<IText2>;
	['SuperAddEffect']: IObjectClass<ISuperAddEffect>;
	['SpriteFontNumbers']: IObjectClass<ISpriteFontNumbers>;
	['Sprite9']: IObjectClass<ISprite9>;
	['Sprite8']: IObjectClass<ISprite8>;
	['Sprite7']: IObjectClass<ISprite7>;
	['Sprite6']: IObjectClass<ISprite6>;
	['Sprite5']: IObjectClass<ISprite5>;
	['Sprite42']: IObjectClass<ISprite42>;
	['Sprite41']: IObjectClass<ISprite41>;
	['Sprite40']: IObjectClass<ISprite40>;
	['Sprite4']: IObjectClass<ISprite4>;
	['Sprite39']: IObjectClass<ISprite39>;
	['Sprite38']: IObjectClass<ISprite38>;
	['Sprite37']: IObjectClass<ISprite37>;
	['Sprite36']: IObjectClass<ISprite36>;
	['Sprite35']: IObjectClass<ISprite35>;
	['Sprite34']: IObjectClass<ISprite34>;
	['Sprite33']: IObjectClass<ISprite33>;
	['Sprite32']: IObjectClass<ISprite32>;
	['Sprite31']: IObjectClass<ISprite31>;
	['Sprite30']: IObjectClass<ISprite30>;
	['Sprite3']: IObjectClass<ISprite3>;
	['Sprite29']: IObjectClass<ISprite29>;
	['Sprite28']: IObjectClass<ISprite28>;
	['Sprite27']: IObjectClass<ISprite27>;
	['Sprite26']: IObjectClass<ISprite26>;
	['Sprite25']: IObjectClass<ISprite25>;
	['Sprite24']: IObjectClass<ISprite24>;
	['Sprite22']: IObjectClass<ISprite22>;
	['Sprite21']: IObjectClass<ISprite21>;
	['Sprite2']: IObjectClass<ISprite2>;
	['Sprite19']: IObjectClass<ISprite19>;
	['Sprite18']: IObjectClass<ISprite18>;
	['Sprite16']: IObjectClass<ISprite16>;
	['Sprite13']: IObjectClass<ISprite13>;
	['Sprite12']: IObjectClass<ISprite12>;
	['Sprite11']: IObjectClass<ISprite11>;
	['Sprite10']: IObjectClass<ISprite10>;
	['Sprite']: IObjectClass<ISprite>;
	['SkinGroup']: IObjectClass<ISkinGroup>;
	['ShockBotAttack']: IObjectClass<IShockBotAttack>;
	['Shield']: IObjectClass<IShield>;
	['RunParticles']: IObjectClass<IRunParticles>;
	['PlayersDataDict']: IObjectClass<IPlayersDataDict>;
	['PlayersData']: IObjectClass<IPlayersData>;
	['PlayersActorNr']: IObjectClass<IPlayersActorNr>;
	['Players1']: IObjectClass<IPlayers1>;
	['Players']: IObjectClass<IPlayers>;
	['Pings']: IObjectClass<IPings>;
	['Photon']: IObjectClass<IPhoton>;
	['PhasaText1']: IObjectClass<IPhasaText1>;
	['PhasaText']: IObjectClass<IPhasaText>;
	['Particles3']: IObjectClass<IParticles3>;
	['Particles2']: IObjectClass<IParticles2>;
	['Particles']: IObjectClass<IParticles>;
	['OnChangePhasaText1']: IObjectClass<IOnChangePhasaText1>;
	['OnChangePhasaText']: IObjectClass<IOnChangePhasaText>;
	['NickNameInMenu']: IObjectClass<INickNameInMenu>;
	['NickName']: IObjectClass<INickName>;
	['MoveToArrow3']: IObjectClass<IMoveToArrow3>;
	['MoveToArrow2']: IObjectClass<IMoveToArrow2>;
	['MoveToArrow1']: IObjectClass<IMoveToArrow1>;
	['MoveToArrow']: IObjectClass<IMoveToArrow>;
	['Mouse']: IObjectClass<IMouse>;
	['MobileAdvert']: IObjectClass<IMobileAdvert>;
	['MessageBack']: IObjectClass<IMessageBack>;
	['LocalStorage']: IObjectClass<ILocalStorage>;
	['Localization']: IObjectClass<ILocalization>;
	['List']: IObjectClass<IList>;
	['LabAnimObjects']: IObjectClass<ILabAnimObjects>;
	['Keyboard']: IObjectClass<IKeyboard>;
	['JumpParticles']: IObjectClass<IJumpParticles>;
	['JSON']: IObjectClass<IJSON>;
	['InputManager']: IObjectClass<IInputManager>;
	['HPTextUI']: IObjectClass<IHPTextUI>;
	['HPText']: IObjectClass<IHPText>;
	['HPBarWhiteEffect']: IObjectClass<IHPBarWhiteEffect>;
	['HPBarUI2']: IObjectClass<IHPBarUI2>;
	['HPBarUI']: IObjectClass<IHPBarUI>;
	['HPBar2']: IObjectClass<IHPBar2>;
	['HPBar']: IObjectClass<IHPBar>;
	['Function']: IObjectClass<IFunction>;
	['EmojiBack']: IObjectClass<IEmojiBack>;
	['Emoji']: IObjectClass<IEmoji>;
	['CyborgAttack2']: IObjectClass<ICyborgAttack2>;
	['ConnectingError']: IObjectClass<IConnectingError>;
	['CharactersInMenu']: IObjectClass<ICharactersInMenu>;
	['CharactersBuyed']: IObjectClass<ICharactersBuyed>;
	['CharacterInMenu']: IObjectClass<ICharacterInMenu>;
	['CharacterBotsData']: IObjectClass<ICharacterBotsData>;
	['center']: IObjectClass<Icenter>;
	['Capsule']: IObjectClass<ICapsule>;
	['Cam']: IObjectClass<ICam>;
	['BuyBotTutorialZone']: IObjectClass<IBuyBotTutorialZone>;
	['BucksText']: IObjectClass<IBucksText>;
	['BucksCharacterIcon']: IObjectClass<IBucksCharacterIcon>;
	['Browser']: IObjectClass<IBrowser>;
	['BotZone']: IObjectClass<IBotZone>;
	['BotTrigger']: IObjectClass<IBotTrigger>;
	['BotsPrice']: IObjectClass<IBotsPrice>;
	['BotsFlyingZone']: IObjectClass<IBotsFlyingZone>;
	['BotsCollider']: IObjectClass<IBotsCollider>;
	['BotNames']: IObjectClass<IBotNames>;
	['BotBuyZoneTutor']: IObjectClass<IBotBuyZoneTutor>;
	['BattleDroneAttackView']: IObjectClass<IBattleDroneAttackView>;
	['Back3D4']: IObjectClass<IBack3D4>;
	['Back3D3']: IObjectClass<IBack3D3>;
	['Back3D2']: IObjectClass<IBack3D2>;
	['Back3D1']: IObjectClass<IBack3D1>;
	['Back']: IObjectClass<IBack>;
	['Audio']: IObjectClass<IAudio>;
	['AJAX']: IObjectClass<IAJAX>;
	['AddHPParticle']: IObjectClass<IAddHPParticle>;
	['3DShape9']: IObjectClass<I3DShape9>;
	['3DShape8']: IObjectClass<I3DShape8>;
	['3DShape7']: IObjectClass<I3DShape7>;
	['3DShape6']: IObjectClass<I3DShape6>;
	['3DShape5']: IObjectClass<I3DShape5>;
	['3DShape4']: IObjectClass<I3DShape4>;
	['3DShape39']: IObjectClass<I3DShape39>;
	['3DShape38']: IObjectClass<I3DShape38>;
	['3DShape37']: IObjectClass<I3DShape37>;
	['3DShape36']: IObjectClass<I3DShape36>;
	['3DShape35']: IObjectClass<I3DShape35>;
	['3DShape34']: IObjectClass<I3DShape34>;
	['3DShape33']: IObjectClass<I3DShape33>;
	['3DShape32']: IObjectClass<I3DShape32>;
	['3DShape31']: IObjectClass<I3DShape31>;
	['3DShape30']: IObjectClass<I3DShape30>;
	['3DShape3']: IObjectClass<I3DShape3>;
	['3DShape29']: IObjectClass<I3DShape29>;
	['3DShape28']: IObjectClass<I3DShape28>;
	['3DShape27']: IObjectClass<I3DShape27>;
	['3DShape26']: IObjectClass<I3DShape26>;
	['3DShape25']: IObjectClass<I3DShape25>;
	['3DShape24']: IObjectClass<I3DShape24>;
	['3DShape23']: IObjectClass<I3DShape23>;
	['3DShape22']: IObjectClass<I3DShape22>;
	['3DShape21']: IObjectClass<I3DShape21>;
	['3DShape20']: IObjectClass<I3DShape20>;
	['3DShape2']: IObjectClass<I3DShape2>;
	['3DShape18']: IObjectClass<I3DShape18>;
	['3DShape17']: IObjectClass<I3DShape17>;
	['3DShape16']: IObjectClass<I3DShape16>;
	['3DShape15']: IObjectClass<I3DShape15>;
	['3DShape14']: IObjectClass<I3DShape14>;
	['3DShape13']: IObjectClass<I3DShape13>;
	['3DShape12']: IObjectClass<I3DShape12>;
	['3DShape11']: IObjectClass<I3DShape11>;
	['3DShape10']: IObjectClass<I3DShape10>;
	['3DShape']: IObjectClass<I3DShape>;
	['3DCamera']: IObjectClass<I3DCamera>;
	['2SpriteFont']: IObjectClass<I2SpriteFont>;
	['2GooglePlay']: IObjectClass<I2GooglePlay>;
	['1PlayersArray']: IObjectClass<I1PlayersArray>;
	['1GameAnalytics']: IObjectClass<I1GameAnalytics>;
	['0HP']: IObjectClass<I0HP>;
	['Сolored']: IObjectClass<IСolored>;
	['ZoneMyBasa4']: IObjectClass<IZoneMyBasa4>;
	['ZoneBucks']: IObjectClass<IZoneBucks>;
	['Zones']: IObjectClass<IZones>;
	['Weapon']: IObjectClass<IWeapon>;
	['CharacterBotTrigger']: IObjectClass<ICharacterBotTrigger>;
	['Triggers']: IObjectClass<ITriggers>;
	['Tilemap5']: IObjectClass<ITilemap5>;
	['Tilemap2']: IObjectClass<ITilemap2>;
	['Tiles']: IObjectClass<ITiles>;
	['Text']: IObjectClass<IText>;
	['Texts']: IObjectClass<ITexts>;
	['Synced']: IObjectClass<ISynced>;
	['SmoothSynced']: IObjectClass<ISmoothSynced>;
	['ReloadableWeapon']: IObjectClass<IReloadableWeapon>;
	['PlatformMovement']: IObjectClass<IPlatformMovement>;
	['Sprite17']: IObjectClass<ISprite17>;
	['OnlineObjs']: IObjectClass<IOnlineObjs>;
	['Movement']: IObjectClass<IMovement>;
	['HasName']: IObjectClass<IHasName>;
	['HasHealth']: IObjectClass<IHasHealth>;
	['Explosions']: IObjectClass<IExplosions>;
	['Emojies']: IObjectClass<IEmojies>;
	['StepperCannonAttackDust']: IObjectClass<IStepperCannonAttackDust>;
	['PatrolAttack']: IObjectClass<IPatrolAttack>;
	['Explosion']: IObjectClass<IExplosion>;
	['DroneAttack']: IObjectClass<IDroneAttack>;
	['CyborgAttackExplosion']: IObjectClass<ICyborgAttackExplosion>;
	['CannonAttack']: IObjectClass<ICannonAttack>;
	['BrigandExplosion']: IObjectClass<IBrigandExplosion>;
	['BattleDroneAttack']: IObjectClass<IBattleDroneAttack>;
	['DestroyOnAnimationFinished']: IObjectClass<IDestroyOnAnimationFinished>;
	['CharacterScins']: IObjectClass<ICharacterScins>;
	['Character']: IObjectClass<ICharacter>;
	['Carcas']: IObjectClass<ICarcas>;
	['CyborgBullet']: IObjectClass<ICyborgBullet>;
	['StepperCannonAttack']: IObjectClass<IStepperCannonAttack>;
	['BikerBullet']: IObjectClass<IBikerBullet>;
	['Bomb']: IObjectClass<IBomb>;
	['AlarmbotBullet']: IObjectClass<IAlarmbotBullet>;
	['PunkBullet']: IObjectClass<IPunkBullet>;
	['CanHurt']: IObjectClass<ICanHurt>;
	['CanBucksCollect']: IObjectClass<ICanBucksCollect>;
	['MessageButton']: IObjectClass<IMessageButton>;
	['EmojiButtonBack']: IObjectClass<IEmojiButtonBack>;
	['EmojiButton']: IObjectClass<IEmojiButton>;
	['GraphicsSettings2']: IObjectClass<IGraphicsSettings2>;
	['ChangeCharacterArrow']: IObjectClass<IChangeCharacterArrow>;
	['Top']: IObjectClass<ITop>;
	['AddBot']: IObjectClass<IAddBot>;
	['exit']: IObjectClass<Iexit>;
	['BuyButton']: IObjectClass<IBuyButton>;
	['OK']: IObjectClass<IOK>;
	['AddFriendButton']: IObjectClass<IAddFriendButton>;
	['ChangeCharacterButton']: IObjectClass<IChangeCharacterButton>;
	['Buttons']: IObjectClass<IButtons>;
	['Bucks2']: IObjectClass<IBucks2>;
	['Bucks']: IObjectClass<IBucks>;
	['Bucks1']: IObjectClass<IBucks1>;
	['BotMob']: IObjectClass<IBotMob>;
	['Bot2']: IObjectClass<IBot2>;
	['Bot']: IObjectClass<IBot>;
	['3DShape19']: IObjectClass<I3DShape19>;
	['BasaRed']: IObjectClass<IBasaRed>;
	['Basa']: IObjectClass<IBasa>;
	['CharacterAttack']: IObjectClass<ICharacterAttack>;
	['DroneAttack2']: IObjectClass<IDroneAttack2>;
	['BattleDroneAttack2']: IObjectClass<IBattleDroneAttack2>;
	['AttackView']: IObjectClass<IAttackView>;
	['ArrowsTutorial']: IObjectClass<IArrowsTutorial>;
	['AnimatedButtons']: IObjectClass<IAnimatedButtons>;
	['GraphicsSettings4']: IObjectClass<IGraphicsSettings4>;
	['GraphicsSettings3']: IObjectClass<IGraphicsSettings3>;
	['Btn']: IObjectClass<IBtn>;
	['StartButton2']: IObjectClass<IStartButton2>;
	['Graphics']: IObjectClass<IGraphics>;
	['Ping']: IObjectClass<IPing>;
	['StartButton']: IObjectClass<IStartButton>;
	['HPBarBackUI']: IObjectClass<IHPBarBackUI>;
	['BotBuyButton']: IObjectClass<IBotBuyButton>;
	['JumpArrow2']: IObjectClass<IJumpArrow2>;
	['Sprite23']: IObjectClass<ISprite23>;
	['AttackButton']: IObjectClass<IAttackButton>;
	['LeftArrow']: IObjectClass<ILeftArrow>;
	['JumpArrow']: IObjectClass<IJumpArrow>;
	['RightArrow']: IObjectClass<IRightArrow>;
	['Anchor']: IObjectClass<IAnchor>;
	['BasaBlue']: IObjectClass<IBasaBlue>;
	['Sprite20']: IObjectClass<ISprite20>;
	['BotIcon']: IObjectClass<IBotIcon>;
	['1WithHPObj']: IObjectClass<I1WithHPObj>;
	['CharacterCollider']: IObjectClass<ICharacterCollider>;
	['1BotsAndCharacters']: IObjectClass<I1BotsAndCharacters>;
	['StepperCannon']: IObjectClass<IStepperCannon>;
	['ShockBot']: IObjectClass<IShockBot>;
	['Punk']: IObjectClass<IPunk>;
	['Patrol']: IObjectClass<IPatrol>;
	['Hammer']: IObjectClass<IHammer>;
	['Drone']: IObjectClass<IDrone>;
	['Copter']: IObjectClass<ICopter>;
	['Cyborg']: IObjectClass<ICyborg>;
	['Cannon']: IObjectClass<ICannon>;
	['Brigand']: IObjectClass<IBrigand>;
	['Bomj']: IObjectClass<IBomj>;
	['Biker']: IObjectClass<IBiker>;
	['BattleDrone']: IObjectClass<IBattleDrone>;
	['Alarmbot']: IObjectClass<IAlarmbot>;
	['0Mob']: IObjectClass<I0Mob>;
}

interface IGlobalVars extends VariableType {
	/**  **/
	["SoundV"]: number
	/**  **/
	["SoundDistanceMult"]: number
	/**  **/
	["SoundDistance"]: number
	/**  **/
	["SoundMaxVolumeDistance"]: number
	/**  **/
	["SoundVolume"]: number
	/**  **/
	readonly ["Bot3NameArrayY"]: number
	/**  **/
	readonly ["Bot2NameArrayY"]: number
	/**  **/
	readonly ["Bot1NameArrayY"]: number
	/**  **/
	readonly ["TrophiesArrayY"]: number
	/**  **/
	readonly ["CharacterNameY"]: number
	/**  **/
	readonly ["NickNameY"]: number
	/**  **/
	readonly ["TeamY"]: number
	/**  **/
	readonly ["ActorNrY"]: number
	/**  **/
	readonly ["PlayerNumberY"]: number
	/**  **/
	["Ping"]: number
	/**  **/
	["Phasa"]: number
	/**  **/
	["PlayTime"]: number
	/**  **/
	["PhasaTimer"]: number
	/**  **/
	readonly ["BotsPhasaTime"]: number
	/**  **/
	readonly ["BucksPhasaTime"]: number
	/**  **/
	["RenderingMode"]: string
	/**  **/
	["Graphics"]: string
	/**  **/
	["OnlineMode"]: boolean
	/**  **/
	["WinTrophiesCount"]: number
	/**  **/
	["StartingMatchMode"]: number
	/**  **/
	["BasaMaxHP"]: number
	/**  **/
	["MaxPlayers"]: number
	/**  **/
	["MyCharacterName"]: string
	/**  **/
	["NickName"]: string
	/**  **/
	["MyActorNr"]: number
	/**  **/
	["MyPlayerNumber"]: number
	/**  **/
	readonly ["PlayerName"]: string
	/**  **/
	["EndMatch"]: boolean
	/**  **/
	["Bot3Name"]: string
	/**  **/
	["Bot2Name"]: string
	/**  **/
	["Bot1Name"]: string
	/**  **/
	["MatchesPlayed"]: number
	/**  **/
	["Trophies"]: number
	/**  **/
	["ActorsGroupAll"]: string
	/**  **/
	["ActorsGroup"]: string
	/** Количество игроков не считая ботов **/
	["MaxOnlinePlayers"]: number
	/**  **/
	["Region"]: string
	/**  **/
	["Language"]: string
	/**  **/
	["RegionSelected"]: boolean
	/**  **/
	["FirstStart"]: boolean
	/**  **/
	["SaveCount"]: number
	/**  **/
	["PlayerActorNr2"]: number
	/**  **/
	["PlayerData"]: string
	/**  **/
	["TargetY"]: number
	/**  **/
	["TargetX"]: number
	/**  **/
	["ViewportScale"]: number
	/**  **/
	["CurrnetLayoutScale"]: number
	/**  **/
	["CameraScale3D"]: number
	/**  **/
	["CameraScale"]: number
	/**  **/
	["CharacterViewScale"]: number
	/**  **/
	["DistanceZ"]: number
}

interface Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

interface IAssetManager {
    fetchText(url: string): Promise<string>;
    fetchJson(url: string): Promise<unknown>;
    fetchBlob(url: string): Promise<Blob>;
    fetchArrayBuffer(url: string): Promise<ArrayBuffer>;
    getProjectFileUrl(url: string): Promise<string>;
    getMediaFileUrl(url: string): Promise<string>;
    mediaFolder: string;
    isWebMOpusSupported: boolean;
    decodeWebMOpus(audioContext: unknown, arrayBuffer: ArrayBuffer): Promise<unknown>;
    loadScripts (...urls: Array<string>): Promise<void>;
    compileWebAssembly(url: string): Promise<unknown>;
}
declare var IAssetManager:  { new(): IAssetManager };

interface IStorage {
    getItem(key: string): Promise<string>;
    setItem(key: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    keys(): Promise<string[]>;
}
declare var IStorage:  { new(): IStorage };

interface ILayout {
    name: string;
    index: number;
    addEventListener(eventName: 'beforelayoutstart' | 'afterlayoutstart', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'beforelayoutstart' | 'afterlayoutstart', callback: (...params: unknown[]) => void): void;
    getLayer(layerNameOrIndex: string | number): ILayer;
    getAllLayers(): Array<ILayer>;
    width: number;
    height: number;
    scrollX: number;
    scrollY: number;
    scrollTo(x: number, y: number): void;
    scale: number;
    projection: 'perspective' | 'orthographic';
    setVanishingPoint(x: number, y: number): void;
    getVanishingPoint(): [number, number];
    effects: Array<IEffectInstance>;
}
declare var ILayout:  { new(): ILayout };

interface ILayer {
    name: string;
    index: number;
    layout: ILayout;
    isVisible: boolean;
    isTransparent: boolean;
    backgroundColor: [number, number, number];
    scrollX: number;
    scrollY: number;
    scrollTo(x: number, y: number): void;
    restoreScrollPosition(): void;
    parallaxX: number;
    parallaxY: number;
    opacity: number;
    scale: number;
    scaleRate: number;
    angle: number;
    zElevation: number;
    getViewport(): DOMRect;
    isForceOwnTexture: boolean;
    blendMode: 'normal' | 'additive' | 'copy' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop';
    effects: Array<IEffectInstance>;
    cssPxToLayer(clientX: number, clientY: number, z?: number): [number, number];
    layerToCssPx(clientX: number, clientY: number, z?: number): [number, number];
}
declare var ILayer:  { new(): ILayer };

interface IEffectInstance {
    index: number;
    name: string;
    isActive: boolean;
    setParamater(index: number, value: number | string | [number, number, number]): void;
    getParamater(index: number): number | string | [number, number, number];
}
declare var IEffectInstance:  { new(): IEffectInstance };

interface IMouseObjectType extends IObjectClass {
    getMouseX(layerNameOrIndex: string | number): number;
    getMouseY(layerNameOrIndex: string | number): number;
    getMousePosition(layerNameOrIndex: string | number): [number, number];
    isMouseButtonDown(button: 1 | 2 | 3): boolean;
}
declare var IMouseObjectType: undefined | { new(): IMouseObjectType };

interface IKeyboardObjectType extends IObjectClass {
    isKeyDown(keyStringOrWhich: number | string): boolean;
}

declare var IKeyboardObjectType: undefined | { new(): IKeyboardObjectType };

interface ITouchObjectType extends IObjectClass {
    requestPermission(type: string): Promise<string>;
}
declare var ITouchObjectType: undefined | { new(): ITouchObjectType };

interface IObjectClass<T = IInstance> {
    readonly name: string;
    addEventListener(eventName: 'instancecreate' | 'instancedestroy', callback: (e: Event & { instance: IInstance }) => void): void;
    removeEventListener(eventName: 'instancecreate' | 'instancedestroy', callback: (e: Event & { instance: IInstance }) => void): void;
    setInstanceClass(classType: { new(): unknown }): void;
    getAllInstances(): Array<T>
    getFirstInstance(): T | undefined
    intances(): Iterator<T>;
    getPickedInstances(): Array<T>
    getFirstPickedInstance(): T | undefined
    pickedInstances(): Iterator<T>;
    createInstance(layerNameOrIndex: string | number, x: number, y: number, createHierachy: boolean): T
}
declare var IObjectClass: { new(): IObjectClass };

interface IZoneMyBasaVars extends VariableType {
	
}
interface IZoneMyBasaBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IZoneMyBasa extends ISpriteInstance {
	instVars: IZoneMyBasaVars;
	behaviors: IZoneMyBasaBehaviors;
}

interface IWinTextVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
}
interface IWinTextBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IWinText extends ITextInstance {
	instVars: IWinTextVars;
	behaviors: IWinTextBehaviors;
}

interface ITrophiesTextVars extends VariableType {
	
}
interface ITrophiesTextBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ITrophiesText extends ITextInstance {
	instVars: ITrophiesTextVars;
	behaviors: ITrophiesTextBehaviors;
}

interface ITouchVars extends VariableType {
	
}
interface ITouchBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITouch extends ITouchObjectType {
	instVars: ITouchVars;
	behaviors: ITouchBehaviors;
}

interface ITimelineControllerVars extends VariableType {
	
}
interface ITimelineControllerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITimelineController extends IWorldInstance {
	instVars: ITimelineControllerVars;
	behaviors: ITimelineControllerBehaviors;
}

interface ITilemap9Vars extends VariableType {
	
}
interface ITilemap9Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap9 extends ITilemapInstance {
	instVars: ITilemap9Vars;
	behaviors: ITilemap9Behaviors;
}

interface ITilemap8Vars extends VariableType {
	
}
interface ITilemap8Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap8 extends ITilemapInstance {
	instVars: ITilemap8Vars;
	behaviors: ITilemap8Behaviors;
}

interface ITilemap7Vars extends VariableType {
	
}
interface ITilemap7Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap7 extends ITilemapInstance {
	instVars: ITilemap7Vars;
	behaviors: ITilemap7Behaviors;
}

interface ITilemap6Vars extends VariableType {
	
}
interface ITilemap6Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap6 extends ITilemapInstance {
	instVars: ITilemap6Vars;
	behaviors: ITilemap6Behaviors;
}

interface ITilemap4Vars extends VariableType {
	
}
interface ITilemap4Behaviors extends Record<string, IBehaviorInstance> {
	['Jumpthru']: IBehaviorInstance
}
interface ITilemap4 extends ITilemapInstance {
	instVars: ITilemap4Vars;
	behaviors: ITilemap4Behaviors;
}

interface ITilemap3Vars extends VariableType {
	
}
interface ITilemap3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap3 extends ITilemapInstance {
	instVars: ITilemap3Vars;
	behaviors: ITilemap3Behaviors;
}

interface ITilemapVars extends VariableType {
	
}
interface ITilemapBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap extends ITilemapInstance {
	instVars: ITilemapVars;
	behaviors: ITilemapBehaviors;
}

interface ITiledBackground5Vars extends VariableType {
	
}
interface ITiledBackground5Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ITiledBackground5 extends IWorldInstance {
	instVars: ITiledBackground5Vars;
	behaviors: ITiledBackground5Behaviors;
}

interface ITiledBackground4Vars extends VariableType {
	
}
interface ITiledBackground4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground4 extends IWorldInstance {
	instVars: ITiledBackground4Vars;
	behaviors: ITiledBackground4Behaviors;
}

interface ITiledBackground3Vars extends VariableType {
	
}
interface ITiledBackground3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground3 extends IWorldInstance {
	instVars: ITiledBackground3Vars;
	behaviors: ITiledBackground3Behaviors;
}

interface ITiledBackground2Vars extends VariableType {
	
}
interface ITiledBackground2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground2 extends IWorldInstance {
	instVars: ITiledBackground2Vars;
	behaviors: ITiledBackground2Behaviors;
}

interface ITiledBackgroundVars extends VariableType {
	
}
interface ITiledBackgroundBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground extends IWorldInstance {
	instVars: ITiledBackgroundVars;
	behaviors: ITiledBackgroundBehaviors;
}

interface ITextInput2Vars extends VariableType {
	
}
interface ITextInput2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITextInput2 extends IWorldInstance {
	instVars: ITextInput2Vars;
	behaviors: ITextInput2Behaviors;
}

interface ITextInputVars extends VariableType {
	
}
interface ITextInputBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ITextInput extends IWorldInstance {
	instVars: ITextInputVars;
	behaviors: ITextInputBehaviors;
}

interface IText3Vars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
}
interface IText3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IText3 extends ITextInstance {
	instVars: IText3Vars;
	behaviors: IText3Behaviors;
}

interface IText2Vars extends VariableType {
	
}
interface IText2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IText2 extends ITextInstance {
	instVars: IText2Vars;
	behaviors: IText2Behaviors;
}

interface ISuperAddEffectVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
}
interface ISuperAddEffectBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISuperAddEffect extends ISpriteInstance {
	instVars: ISuperAddEffectVars;
	behaviors: ISuperAddEffectBehaviors;
}

interface ISpriteFontNumbersVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
}
interface ISpriteFontNumbersBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISpriteFontNumbers extends IWorldInstance {
	instVars: ISpriteFontNumbersVars;
	behaviors: ISpriteFontNumbersBehaviors;
}

interface ISprite9Vars extends VariableType {
	
}
interface ISprite9Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite9 extends ISpriteInstance {
	instVars: ISprite9Vars;
	behaviors: ISprite9Behaviors;
}

interface ISprite8Vars extends VariableType {
	
}
interface ISprite8Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite8 extends ISpriteInstance {
	instVars: ISprite8Vars;
	behaviors: ISprite8Behaviors;
}

interface ISprite7Vars extends VariableType {
	
}
interface ISprite7Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ISprite7 extends ISpriteInstance {
	instVars: ISprite7Vars;
	behaviors: ISprite7Behaviors;
}

interface ISprite6Vars extends VariableType {
	
}
interface ISprite6Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite6 extends ISpriteInstance {
	instVars: ISprite6Vars;
	behaviors: ISprite6Behaviors;
}

interface ISprite5Vars extends VariableType {
	
}
interface ISprite5Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite5 extends ISpriteInstance {
	instVars: ISprite5Vars;
	behaviors: ISprite5Behaviors;
}

interface ISprite42Vars extends VariableType {
	
}
interface ISprite42Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite42 extends ISpriteInstance {
	instVars: ISprite42Vars;
	behaviors: ISprite42Behaviors;
}

interface ISprite41Vars extends VariableType {
	
}
interface ISprite41Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite41 extends ISpriteInstance {
	instVars: ISprite41Vars;
	behaviors: ISprite41Behaviors;
}

interface ISprite40Vars extends VariableType {
	
}
interface ISprite40Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite40 extends ISpriteInstance {
	instVars: ISprite40Vars;
	behaviors: ISprite40Behaviors;
}

interface ISprite4Vars extends VariableType {
	
}
interface ISprite4Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ISprite4 extends ISpriteInstance {
	instVars: ISprite4Vars;
	behaviors: ISprite4Behaviors;
}

interface ISprite39Vars extends VariableType {
	
}
interface ISprite39Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite39 extends ISpriteInstance {
	instVars: ISprite39Vars;
	behaviors: ISprite39Behaviors;
}

interface ISprite38Vars extends VariableType {
	
}
interface ISprite38Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite38 extends ISpriteInstance {
	instVars: ISprite38Vars;
	behaviors: ISprite38Behaviors;
}

interface ISprite37Vars extends VariableType {
	
}
interface ISprite37Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite37 extends ISpriteInstance {
	instVars: ISprite37Vars;
	behaviors: ISprite37Behaviors;
}

interface ISprite36Vars extends VariableType {
	
}
interface ISprite36Behaviors extends Record<string, IBehaviorInstance> {
	['ScrollTo']: IBehaviorInstance
}
interface ISprite36 extends ISpriteInstance {
	instVars: ISprite36Vars;
	behaviors: ISprite36Behaviors;
}

interface ISprite35Vars extends VariableType {
	
}
interface ISprite35Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite35 extends ISpriteInstance {
	instVars: ISprite35Vars;
	behaviors: ISprite35Behaviors;
}

interface ISprite34Vars extends VariableType {
	
}
interface ISprite34Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite34 extends ISpriteInstance {
	instVars: ISprite34Vars;
	behaviors: ISprite34Behaviors;
}

interface ISprite33Vars extends VariableType {
	
}
interface ISprite33Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ISprite33 extends ISpriteInstance {
	instVars: ISprite33Vars;
	behaviors: ISprite33Behaviors;
}

interface ISprite32Vars extends VariableType {
	
}
interface ISprite32Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite32 extends ISpriteInstance {
	instVars: ISprite32Vars;
	behaviors: ISprite32Behaviors;
}

interface ISprite31Vars extends VariableType {
	
}
interface ISprite31Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite31 extends ISpriteInstance {
	instVars: ISprite31Vars;
	behaviors: ISprite31Behaviors;
}

interface ISprite30Vars extends VariableType {
	
}
interface ISprite30Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite30 extends ISpriteInstance {
	instVars: ISprite30Vars;
	behaviors: ISprite30Behaviors;
}

interface ISprite3Vars extends VariableType {
	
}
interface ISprite3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite3 extends ISpriteInstance {
	instVars: ISprite3Vars;
	behaviors: ISprite3Behaviors;
}

interface ISprite29Vars extends VariableType {
	
}
interface ISprite29Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite29 extends ISpriteInstance {
	instVars: ISprite29Vars;
	behaviors: ISprite29Behaviors;
}

interface ISprite28Vars extends VariableType {
	
}
interface ISprite28Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite28 extends ISpriteInstance {
	instVars: ISprite28Vars;
	behaviors: ISprite28Behaviors;
}

interface ISprite27Vars extends VariableType {
	
}
interface ISprite27Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite27 extends ISpriteInstance {
	instVars: ISprite27Vars;
	behaviors: ISprite27Behaviors;
}

interface ISprite26Vars extends VariableType {
	
}
interface ISprite26Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite26 extends ISpriteInstance {
	instVars: ISprite26Vars;
	behaviors: ISprite26Behaviors;
}

interface ISprite25Vars extends VariableType {
	
}
interface ISprite25Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite25 extends ISpriteInstance {
	instVars: ISprite25Vars;
	behaviors: ISprite25Behaviors;
}

interface ISprite24Vars extends VariableType {
	
}
interface ISprite24Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite24 extends ISpriteInstance {
	instVars: ISprite24Vars;
	behaviors: ISprite24Behaviors;
}

interface ISprite22Vars extends VariableType {
	
}
interface ISprite22Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ISprite22 extends ISpriteInstance {
	instVars: ISprite22Vars;
	behaviors: ISprite22Behaviors;
}

interface ISprite21Vars extends VariableType {
	
}
interface ISprite21Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite21 extends ISpriteInstance {
	instVars: ISprite21Vars;
	behaviors: ISprite21Behaviors;
}

interface ISprite2Vars extends VariableType {
	
}
interface ISprite2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite2 extends ISpriteInstance {
	instVars: ISprite2Vars;
	behaviors: ISprite2Behaviors;
}

interface ISprite19Vars extends VariableType {
	
}
interface ISprite19Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite19 extends ISpriteInstance {
	instVars: ISprite19Vars;
	behaviors: ISprite19Behaviors;
}

interface ISprite18Vars extends VariableType {
	
}
interface ISprite18Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite18 extends ISpriteInstance {
	instVars: ISprite18Vars;
	behaviors: ISprite18Behaviors;
}

interface ISprite16Vars extends VariableType {
	
}
interface ISprite16Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite16 extends ISpriteInstance {
	instVars: ISprite16Vars;
	behaviors: ISprite16Behaviors;
}

interface ISprite13Vars extends VariableType {
	
}
interface ISprite13Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite13 extends ISpriteInstance {
	instVars: ISprite13Vars;
	behaviors: ISprite13Behaviors;
}

interface ISprite12Vars extends VariableType {
	
}
interface ISprite12Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite12 extends ISpriteInstance {
	instVars: ISprite12Vars;
	behaviors: ISprite12Behaviors;
}

interface ISprite11Vars extends VariableType {
	
}
interface ISprite11Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite11 extends ISpriteInstance {
	instVars: ISprite11Vars;
	behaviors: ISprite11Behaviors;
}

interface ISprite10Vars extends VariableType {
	
}
interface ISprite10Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite10 extends ISpriteInstance {
	instVars: ISprite10Vars;
	behaviors: ISprite10Behaviors;
}

interface ISpriteVars extends VariableType {
	
}
interface ISpriteBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite extends ISpriteInstance {
	instVars: ISpriteVars;
	behaviors: ISpriteBehaviors;
}

interface ISkinGroupVars extends VariableType {
	
}
interface ISkinGroupBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISkinGroup extends IInstance {
	instVars: ISkinGroupVars;
	behaviors: ISkinGroupBehaviors;
}

interface IShockBotAttackVars extends VariableType {
	
}
interface IShockBotAttackBehaviors extends Record<string, IBehaviorInstance> {
	['Tween']: IBehaviorInstance
}
interface IShockBotAttack extends ISpriteInstance {
	instVars: IShockBotAttackVars;
	behaviors: IShockBotAttackBehaviors;
}

interface IShieldVars extends VariableType {
	/**  **/
	['ID']: number;
}
interface IShieldBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IShield extends ISpriteInstance {
	instVars: IShieldVars;
	behaviors: IShieldBehaviors;
}

interface IRunParticlesVars extends VariableType {
	
}
interface IRunParticlesBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IRunParticles extends IWorldInstance {
	instVars: IRunParticlesVars;
	behaviors: IRunParticlesBehaviors;
}

interface IPlayersDataDictVars extends VariableType {
	
}
interface IPlayersDataDictBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPlayersDataDict extends IDictionaryInstance {
	instVars: IPlayersDataDictVars;
	behaviors: IPlayersDataDictBehaviors;
}

interface IPlayersDataVars extends VariableType {
	
}
interface IPlayersDataBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPlayersData extends IInstance {
	instVars: IPlayersDataVars;
	behaviors: IPlayersDataBehaviors;
}

interface IPlayersActorNrVars extends VariableType {
	
}
interface IPlayersActorNrBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPlayersActorNr extends IInstance {
	instVars: IPlayersActorNrVars;
	behaviors: IPlayersActorNrBehaviors;
}

interface IPlayers1Vars extends VariableType {
	
}
interface IPlayers1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPlayers1 extends IDictionaryInstance {
	instVars: IPlayers1Vars;
	behaviors: IPlayers1Behaviors;
}

interface IPlayersVars extends VariableType {
	
}
interface IPlayersBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPlayers extends IInstance {
	instVars: IPlayersVars;
	behaviors: IPlayersBehaviors;
}

interface IPingsVars extends VariableType {
	
}
interface IPingsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPings extends IInstance {
	instVars: IPingsVars;
	behaviors: IPingsBehaviors;
}

interface IPhotonVars extends VariableType {
	
}
interface IPhotonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPhoton extends IWorldInstance {
	instVars: IPhotonVars;
	behaviors: IPhotonBehaviors;
}

interface IPhasaText1Vars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
}
interface IPhasaText1Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IPhasaText1 extends IWorldInstance {
	instVars: IPhasaText1Vars;
	behaviors: IPhasaText1Behaviors;
}

interface IPhasaTextVars extends VariableType {
	
}
interface IPhasaTextBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IPhasaText extends ITextInstance {
	instVars: IPhasaTextVars;
	behaviors: IPhasaTextBehaviors;
}

interface IParticles3Vars extends VariableType {
	
}
interface IParticles3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IParticles3 extends IWorldInstance {
	instVars: IParticles3Vars;
	behaviors: IParticles3Behaviors;
}

interface IParticles2Vars extends VariableType {
	
}
interface IParticles2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IParticles2 extends IWorldInstance {
	instVars: IParticles2Vars;
	behaviors: IParticles2Behaviors;
}

interface IParticlesVars extends VariableType {
	
}
interface IParticlesBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IParticles extends IWorldInstance {
	instVars: IParticlesVars;
	behaviors: IParticlesBehaviors;
}

interface IOnChangePhasaText1Vars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
}
interface IOnChangePhasaText1Behaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
	['Sine2']: IBehaviorInstance
	['Sine3']: IBehaviorInstance
}
interface IOnChangePhasaText1 extends IWorldInstance {
	instVars: IOnChangePhasaText1Vars;
	behaviors: IOnChangePhasaText1Behaviors;
}

interface IOnChangePhasaTextVars extends VariableType {
	/**  **/
	['ID']: number;
}
interface IOnChangePhasaTextBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
	['Sine2']: IBehaviorInstance
	['Sine3']: IBehaviorInstance
}
interface IOnChangePhasaText extends ITextInstance {
	instVars: IOnChangePhasaTextVars;
	behaviors: IOnChangePhasaTextBehaviors;
}

interface INickNameInMenuVars extends VariableType {
	
}
interface INickNameInMenuBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface INickNameInMenu extends ITextInstance {
	instVars: INickNameInMenuVars;
	behaviors: INickNameInMenuBehaviors;
}

interface INickNameVars extends VariableType {
	
}
interface INickNameBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface INickName extends ITextInstance {
	instVars: INickNameVars;
	behaviors: INickNameBehaviors;
}

interface IMoveToArrow3Vars extends VariableType {
	
}
interface IMoveToArrow3Behaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
	['Sine2']: IBehaviorInstance
}
interface IMoveToArrow3 extends ISpriteInstance {
	instVars: IMoveToArrow3Vars;
	behaviors: IMoveToArrow3Behaviors;
}

interface IMoveToArrow2Vars extends VariableType {
	
}
interface IMoveToArrow2Behaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
	['Sine2']: IBehaviorInstance
}
interface IMoveToArrow2 extends ISpriteInstance {
	instVars: IMoveToArrow2Vars;
	behaviors: IMoveToArrow2Behaviors;
}

interface IMoveToArrow1Vars extends VariableType {
	
}
interface IMoveToArrow1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMoveToArrow1 extends ISpriteInstance {
	instVars: IMoveToArrow1Vars;
	behaviors: IMoveToArrow1Behaviors;
}

interface IMoveToArrowVars extends VariableType {
	
}
interface IMoveToArrowBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
	['Sine2']: IBehaviorInstance
}
interface IMoveToArrow extends ISpriteInstance {
	instVars: IMoveToArrowVars;
	behaviors: IMoveToArrowBehaviors;
}

interface IMouseVars extends VariableType {
	
}
interface IMouseBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMouse extends IMouseObjectType {
	instVars: IMouseVars;
	behaviors: IMouseBehaviors;
}

interface IMobileAdvertVars extends VariableType {
	
}
interface IMobileAdvertBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMobileAdvert extends IWorldInstance {
	instVars: IMobileAdvertVars;
	behaviors: IMobileAdvertBehaviors;
}

interface IMessageBackVars extends VariableType {
	/**  **/
	['Message']: string;
	/**  **/
	['TargetScale']: number;
}
interface IMessageBackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMessageBack extends ISpriteInstance {
	instVars: IMessageBackVars;
	behaviors: IMessageBackBehaviors;
}

interface ILocalStorageVars extends VariableType {
	
}
interface ILocalStorageBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILocalStorage extends IWorldInstance {
	instVars: ILocalStorageVars;
	behaviors: ILocalStorageBehaviors;
}

interface ILocalizationVars extends VariableType {
	
}
interface ILocalizationBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILocalization extends IDictionaryInstance {
	instVars: ILocalizationVars;
	behaviors: ILocalizationBehaviors;
}

interface IListVars extends VariableType {
	
}
interface IListBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IList extends IWorldInstance {
	instVars: IListVars;
	behaviors: IListBehaviors;
}

interface ILabAnimObjectsVars extends VariableType {
	
}
interface ILabAnimObjectsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILabAnimObjects extends ISpriteInstance {
	instVars: ILabAnimObjectsVars;
	behaviors: ILabAnimObjectsBehaviors;
}

interface IKeyboardVars extends VariableType {
	
}
interface IKeyboardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IKeyboard extends IKeyboardObjectType {
	instVars: IKeyboardVars;
	behaviors: IKeyboardBehaviors;
}

interface IJumpParticlesVars extends VariableType {
	
}
interface IJumpParticlesBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IJumpParticles extends IWorldInstance {
	instVars: IJumpParticlesVars;
	behaviors: IJumpParticlesBehaviors;
}

interface IJSONVars extends VariableType {
	
}
interface IJSONBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IJSON extends IJsonInstance {
	instVars: IJSONVars;
	behaviors: IJSONBehaviors;
}

interface IInputManagerVars extends VariableType {
	
}
interface IInputManagerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IInputManager extends IWorldInstance {
	instVars: IInputManagerVars;
	behaviors: IInputManagerBehaviors;
}

interface IHPTextUIVars extends VariableType {
	
}
interface IHPTextUIBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPTextUI extends ITextInstance {
	instVars: IHPTextUIVars;
	behaviors: IHPTextUIBehaviors;
}

interface IHPTextVars extends VariableType {
	
}
interface IHPTextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPText extends ITextInstance {
	instVars: IHPTextVars;
	behaviors: IHPTextBehaviors;
}

interface IHPBarWhiteEffectVars extends VariableType {
	
}
interface IHPBarWhiteEffectBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPBarWhiteEffect extends ISpriteInstance {
	instVars: IHPBarWhiteEffectVars;
	behaviors: IHPBarWhiteEffectBehaviors;
}

interface IHPBarUI2Vars extends VariableType {
	/**  **/
	['MaxWidth']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['HP']: number;
}
interface IHPBarUI2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPBarUI2 extends ISpriteInstance {
	instVars: IHPBarUI2Vars;
	behaviors: IHPBarUI2Behaviors;
}

interface IHPBarUIVars extends VariableType {
	/**  **/
	['MaxWidth']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['HP']: number;
}
interface IHPBarUIBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPBarUI extends ISpriteInstance {
	instVars: IHPBarUIVars;
	behaviors: IHPBarUIBehaviors;
}

interface IHPBar2Vars extends VariableType {
	/**  **/
	['MaxWidth']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['HP']: number;
}
interface IHPBar2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPBar2 extends ISpriteInstance {
	instVars: IHPBar2Vars;
	behaviors: IHPBar2Behaviors;
}

interface IHPBarVars extends VariableType {
	/**  **/
	['MaxWidth']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['HP']: number;
}
interface IHPBarBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPBar extends ISpriteInstance {
	instVars: IHPBarVars;
	behaviors: IHPBarBehaviors;
}

interface IFunctionVars extends VariableType {
	
}
interface IFunctionBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IFunction extends IWorldInstance {
	instVars: IFunctionVars;
	behaviors: IFunctionBehaviors;
}

interface IEmojiBackVars extends VariableType {
	/**  **/
	['TargetScale']: number;
}
interface IEmojiBackBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface IEmojiBack extends ISpriteInstance {
	instVars: IEmojiBackVars;
	behaviors: IEmojiBackBehaviors;
}

interface IEmojiVars extends VariableType {
	
}
interface IEmojiBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface IEmoji extends ISpriteInstance {
	instVars: IEmojiVars;
	behaviors: IEmojiBehaviors;
}

interface ICyborgAttack2Vars extends VariableType {
	
}
interface ICyborgAttack2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICyborgAttack2 extends ISpriteInstance {
	instVars: ICyborgAttack2Vars;
	behaviors: ICyborgAttack2Behaviors;
}

interface IConnectingErrorVars extends VariableType {
	
}
interface IConnectingErrorBehaviors extends Record<string, IBehaviorInstance> {
	['Timer']: IBehaviorInstance
	['Sine']: IBehaviorInstance
	['Sine2']: IBehaviorInstance
}
interface IConnectingError extends ISpriteInstance {
	instVars: IConnectingErrorVars;
	behaviors: IConnectingErrorBehaviors;
}

interface ICharactersInMenuVars extends VariableType {
	
}
interface ICharactersInMenuBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharactersInMenu extends IInstance {
	instVars: ICharactersInMenuVars;
	behaviors: ICharactersInMenuBehaviors;
}

interface ICharactersBuyedVars extends VariableType {
	
}
interface ICharactersBuyedBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharactersBuyed extends IDictionaryInstance {
	instVars: ICharactersBuyedVars;
	behaviors: ICharactersBuyedBehaviors;
}

interface ICharacterInMenuVars extends VariableType {
	/**  **/
	['MyCharacter']: boolean;
	/**  **/
	['ID']: number;
	/**  **/
	['Price']: number;
}
interface ICharacterInMenuBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacterInMenu extends ISpriteInstance {
	instVars: ICharacterInMenuVars;
	behaviors: ICharacterInMenuBehaviors;
}

interface ICharacterBotsDataVars extends VariableType {
	
}
interface ICharacterBotsDataBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacterBotsData extends IInstance {
	instVars: ICharacterBotsDataVars;
	behaviors: ICharacterBotsDataBehaviors;
}

interface IcenterVars extends VariableType {
	
}
interface IcenterBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Icenter extends ISpriteInstance {
	instVars: IcenterVars;
	behaviors: IcenterBehaviors;
}

interface ICapsuleVars extends VariableType {
	
}
interface ICapsuleBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICapsule extends ISpriteInstance {
	instVars: ICapsuleVars;
	behaviors: ICapsuleBehaviors;
}

interface ICamVars extends VariableType {
	/**  **/
	['LayoutScale']: number;
	/**  **/
	['BotBuyingDistance']: number;
}
interface ICamBehaviors extends Record<string, IBehaviorInstance> {
	['ScrollTo']: IBehaviorInstance
	['Timer']: IBehaviorInstance
}
interface ICam extends ISpriteInstance {
	instVars: ICamVars;
	behaviors: ICamBehaviors;
}

interface IBuyBotTutorialZoneVars extends VariableType {
	
}
interface IBuyBotTutorialZoneBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBuyBotTutorialZone extends IWorldInstance {
	instVars: IBuyBotTutorialZoneVars;
	behaviors: IBuyBotTutorialZoneBehaviors;
}

interface IBucksTextVars extends VariableType {
	
}
interface IBucksTextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBucksText extends ITextInstance {
	instVars: IBucksTextVars;
	behaviors: IBucksTextBehaviors;
}

interface IBucksCharacterIconVars extends VariableType {
	
}
interface IBucksCharacterIconBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBucksCharacterIcon extends ISpriteInstance {
	instVars: IBucksCharacterIconVars;
	behaviors: IBucksCharacterIconBehaviors;
}

interface IBrowserVars extends VariableType {
	
}
interface IBrowserBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBrowser extends IWorldInstance {
	instVars: IBrowserVars;
	behaviors: IBrowserBehaviors;
}

interface IBotZoneVars extends VariableType {
	/**  **/
	['Color']: string;
	/**  **/
	['Dir']: number;
}
interface IBotZoneBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotZone extends ISpriteInstance {
	instVars: IBotZoneVars;
	behaviors: IBotZoneBehaviors;
}

interface IBotTriggerVars extends VariableType {
	/**  **/
	['Jump']: number;
	/**  **/
	['Dir']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['AttackingCoeff']: number;
	/**  **/
	['Only1Color']: boolean;
	/**  **/
	['Trigger']: boolean;
}
interface IBotTriggerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotTrigger extends ISpriteInstance {
	instVars: IBotTriggerVars;
	behaviors: IBotTriggerBehaviors;
}

interface IBotsPriceVars extends VariableType {
	
}
interface IBotsPriceBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotsPrice extends IDictionaryInstance {
	instVars: IBotsPriceVars;
	behaviors: IBotsPriceBehaviors;
}

interface IBotsFlyingZoneVars extends VariableType {
	
}
interface IBotsFlyingZoneBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotsFlyingZone extends ISpriteInstance {
	instVars: IBotsFlyingZoneVars;
	behaviors: IBotsFlyingZoneBehaviors;
}

interface IBotsColliderVars extends VariableType {
	
}
interface IBotsColliderBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotsCollider extends ISpriteInstance {
	instVars: IBotsColliderVars;
	behaviors: IBotsColliderBehaviors;
}

interface IBotNamesVars extends VariableType {
	
}
interface IBotNamesBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotNames extends IDictionaryInstance {
	instVars: IBotNamesVars;
	behaviors: IBotNamesBehaviors;
}

interface IBotBuyZoneTutorVars extends VariableType {
	
}
interface IBotBuyZoneTutorBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface IBotBuyZoneTutor extends ISpriteInstance {
	instVars: IBotBuyZoneTutorVars;
	behaviors: IBotBuyZoneTutorBehaviors;
}

interface IBattleDroneAttackViewVars extends VariableType {
	
}
interface IBattleDroneAttackViewBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBattleDroneAttackView extends ISpriteInstance {
	instVars: IBattleDroneAttackViewVars;
	behaviors: IBattleDroneAttackViewBehaviors;
}

interface IBack3D4Vars extends VariableType {
	
}
interface IBack3D4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBack3D4 extends IWorldInstance {
	instVars: IBack3D4Vars;
	behaviors: IBack3D4Behaviors;
}

interface IBack3D3Vars extends VariableType {
	
}
interface IBack3D3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBack3D3 extends IWorldInstance {
	instVars: IBack3D3Vars;
	behaviors: IBack3D3Behaviors;
}

interface IBack3D2Vars extends VariableType {
	
}
interface IBack3D2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBack3D2 extends IWorldInstance {
	instVars: IBack3D2Vars;
	behaviors: IBack3D2Behaviors;
}

interface IBack3D1Vars extends VariableType {
	
}
interface IBack3D1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBack3D1 extends IWorldInstance {
	instVars: IBack3D1Vars;
	behaviors: IBack3D1Behaviors;
}

interface IBackVars extends VariableType {
	
}
interface IBackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBack extends ITilemapInstance {
	instVars: IBackVars;
	behaviors: IBackBehaviors;
}

interface IAudioVars extends VariableType {
	
}
interface IAudioBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAudio extends IAudioObjectType {
	instVars: IAudioVars;
	behaviors: IAudioBehaviors;
}

interface IAJAXVars extends VariableType {
	
}
interface IAJAXBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAJAX extends IWorldInstance {
	instVars: IAJAXVars;
	behaviors: IAJAXBehaviors;
}

interface IAddHPParticleVars extends VariableType {
	
}
interface IAddHPParticleBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAddHPParticle extends IWorldInstance {
	instVars: IAddHPParticleVars;
	behaviors: IAddHPParticleBehaviors;
}

interface I3DShape9Vars extends VariableType {
	
}
interface I3DShape9Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape9 extends IWorldInstance {
	instVars: I3DShape9Vars;
	behaviors: I3DShape9Behaviors;
}

interface I3DShape8Vars extends VariableType {
	
}
interface I3DShape8Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape8 extends IWorldInstance {
	instVars: I3DShape8Vars;
	behaviors: I3DShape8Behaviors;
}

interface I3DShape7Vars extends VariableType {
	
}
interface I3DShape7Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape7 extends IWorldInstance {
	instVars: I3DShape7Vars;
	behaviors: I3DShape7Behaviors;
}

interface I3DShape6Vars extends VariableType {
	
}
interface I3DShape6Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape6 extends IWorldInstance {
	instVars: I3DShape6Vars;
	behaviors: I3DShape6Behaviors;
}

interface I3DShape5Vars extends VariableType {
	
}
interface I3DShape5Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape5 extends IWorldInstance {
	instVars: I3DShape5Vars;
	behaviors: I3DShape5Behaviors;
}

interface I3DShape4Vars extends VariableType {
	
}
interface I3DShape4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape4 extends IWorldInstance {
	instVars: I3DShape4Vars;
	behaviors: I3DShape4Behaviors;
}

interface I3DShape39Vars extends VariableType {
	
}
interface I3DShape39Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape39 extends IWorldInstance {
	instVars: I3DShape39Vars;
	behaviors: I3DShape39Behaviors;
}

interface I3DShape38Vars extends VariableType {
	
}
interface I3DShape38Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape38 extends IWorldInstance {
	instVars: I3DShape38Vars;
	behaviors: I3DShape38Behaviors;
}

interface I3DShape37Vars extends VariableType {
	
}
interface I3DShape37Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape37 extends IWorldInstance {
	instVars: I3DShape37Vars;
	behaviors: I3DShape37Behaviors;
}

interface I3DShape36Vars extends VariableType {
	
}
interface I3DShape36Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape36 extends IWorldInstance {
	instVars: I3DShape36Vars;
	behaviors: I3DShape36Behaviors;
}

interface I3DShape35Vars extends VariableType {
	
}
interface I3DShape35Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape35 extends IWorldInstance {
	instVars: I3DShape35Vars;
	behaviors: I3DShape35Behaviors;
}

interface I3DShape34Vars extends VariableType {
	
}
interface I3DShape34Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape34 extends IWorldInstance {
	instVars: I3DShape34Vars;
	behaviors: I3DShape34Behaviors;
}

interface I3DShape33Vars extends VariableType {
	
}
interface I3DShape33Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape33 extends IWorldInstance {
	instVars: I3DShape33Vars;
	behaviors: I3DShape33Behaviors;
}

interface I3DShape32Vars extends VariableType {
	
}
interface I3DShape32Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape32 extends IWorldInstance {
	instVars: I3DShape32Vars;
	behaviors: I3DShape32Behaviors;
}

interface I3DShape31Vars extends VariableType {
	
}
interface I3DShape31Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape31 extends IWorldInstance {
	instVars: I3DShape31Vars;
	behaviors: I3DShape31Behaviors;
}

interface I3DShape30Vars extends VariableType {
	
}
interface I3DShape30Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape30 extends IWorldInstance {
	instVars: I3DShape30Vars;
	behaviors: I3DShape30Behaviors;
}

interface I3DShape3Vars extends VariableType {
	
}
interface I3DShape3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape3 extends IWorldInstance {
	instVars: I3DShape3Vars;
	behaviors: I3DShape3Behaviors;
}

interface I3DShape29Vars extends VariableType {
	
}
interface I3DShape29Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape29 extends IWorldInstance {
	instVars: I3DShape29Vars;
	behaviors: I3DShape29Behaviors;
}

interface I3DShape28Vars extends VariableType {
	
}
interface I3DShape28Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape28 extends IWorldInstance {
	instVars: I3DShape28Vars;
	behaviors: I3DShape28Behaviors;
}

interface I3DShape27Vars extends VariableType {
	
}
interface I3DShape27Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape27 extends IWorldInstance {
	instVars: I3DShape27Vars;
	behaviors: I3DShape27Behaviors;
}

interface I3DShape26Vars extends VariableType {
	
}
interface I3DShape26Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape26 extends IWorldInstance {
	instVars: I3DShape26Vars;
	behaviors: I3DShape26Behaviors;
}

interface I3DShape25Vars extends VariableType {
	
}
interface I3DShape25Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape25 extends IWorldInstance {
	instVars: I3DShape25Vars;
	behaviors: I3DShape25Behaviors;
}

interface I3DShape24Vars extends VariableType {
	
}
interface I3DShape24Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape24 extends IWorldInstance {
	instVars: I3DShape24Vars;
	behaviors: I3DShape24Behaviors;
}

interface I3DShape23Vars extends VariableType {
	
}
interface I3DShape23Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape23 extends IWorldInstance {
	instVars: I3DShape23Vars;
	behaviors: I3DShape23Behaviors;
}

interface I3DShape22Vars extends VariableType {
	
}
interface I3DShape22Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape22 extends IWorldInstance {
	instVars: I3DShape22Vars;
	behaviors: I3DShape22Behaviors;
}

interface I3DShape21Vars extends VariableType {
	
}
interface I3DShape21Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape21 extends IWorldInstance {
	instVars: I3DShape21Vars;
	behaviors: I3DShape21Behaviors;
}

interface I3DShape20Vars extends VariableType {
	
}
interface I3DShape20Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape20 extends IWorldInstance {
	instVars: I3DShape20Vars;
	behaviors: I3DShape20Behaviors;
}

interface I3DShape2Vars extends VariableType {
	
}
interface I3DShape2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape2 extends IWorldInstance {
	instVars: I3DShape2Vars;
	behaviors: I3DShape2Behaviors;
}

interface I3DShape18Vars extends VariableType {
	
}
interface I3DShape18Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape18 extends IWorldInstance {
	instVars: I3DShape18Vars;
	behaviors: I3DShape18Behaviors;
}

interface I3DShape17Vars extends VariableType {
	
}
interface I3DShape17Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape17 extends IWorldInstance {
	instVars: I3DShape17Vars;
	behaviors: I3DShape17Behaviors;
}

interface I3DShape16Vars extends VariableType {
	
}
interface I3DShape16Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape16 extends IWorldInstance {
	instVars: I3DShape16Vars;
	behaviors: I3DShape16Behaviors;
}

interface I3DShape15Vars extends VariableType {
	
}
interface I3DShape15Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape15 extends IWorldInstance {
	instVars: I3DShape15Vars;
	behaviors: I3DShape15Behaviors;
}

interface I3DShape14Vars extends VariableType {
	
}
interface I3DShape14Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape14 extends IWorldInstance {
	instVars: I3DShape14Vars;
	behaviors: I3DShape14Behaviors;
}

interface I3DShape13Vars extends VariableType {
	
}
interface I3DShape13Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape13 extends IWorldInstance {
	instVars: I3DShape13Vars;
	behaviors: I3DShape13Behaviors;
}

interface I3DShape12Vars extends VariableType {
	
}
interface I3DShape12Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape12 extends IWorldInstance {
	instVars: I3DShape12Vars;
	behaviors: I3DShape12Behaviors;
}

interface I3DShape11Vars extends VariableType {
	
}
interface I3DShape11Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape11 extends IWorldInstance {
	instVars: I3DShape11Vars;
	behaviors: I3DShape11Behaviors;
}

interface I3DShape10Vars extends VariableType {
	
}
interface I3DShape10Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape10 extends IWorldInstance {
	instVars: I3DShape10Vars;
	behaviors: I3DShape10Behaviors;
}

interface I3DShapeVars extends VariableType {
	
}
interface I3DShapeBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape extends IWorldInstance {
	instVars: I3DShapeVars;
	behaviors: I3DShapeBehaviors;
}

interface I3DCameraVars extends VariableType {
	
}
interface I3DCameraBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DCamera extends IWorldInstance {
	instVars: I3DCameraVars;
	behaviors: I3DCameraBehaviors;
}

interface I2SpriteFontVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
	/**  **/
	['LocalizationKey']: string;
}
interface I2SpriteFontBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface I2SpriteFont extends IWorldInstance {
	instVars: I2SpriteFontVars;
	behaviors: I2SpriteFontBehaviors;
}

interface I2GooglePlayVars extends VariableType {
	
}
interface I2GooglePlayBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I2GooglePlay extends IWorldInstance {
	instVars: I2GooglePlayVars;
	behaviors: I2GooglePlayBehaviors;
}

interface I1PlayersArrayVars extends VariableType {
	
}
interface I1PlayersArrayBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I1PlayersArray extends IInstance {
	instVars: I1PlayersArrayVars;
	behaviors: I1PlayersArrayBehaviors;
}

interface I1GameAnalyticsVars extends VariableType {
	
}
interface I1GameAnalyticsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I1GameAnalytics extends IWorldInstance {
	instVars: I1GameAnalyticsVars;
	behaviors: I1GameAnalyticsBehaviors;
}

interface I0HPVars extends VariableType {
	/**  **/
	['ID']: string;
	/**  **/
	['Spawning']: boolean;
	/**  **/
	['HP']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['Mode']: string;
}
interface I0HPBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
	['Timer']: IBehaviorInstance
}
interface I0HP extends ISpriteInstance {
	instVars: I0HPVars;
	behaviors: I0HPBehaviors;
}

interface IСoloredVars extends VariableType {
	/**  **/
	['oColor']: string;
}
interface IСoloredBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IСolored extends ISpriteInstance {
	instVars: IСoloredVars;
	behaviors: IСoloredBehaviors;
}

interface IZoneMyBasa4Vars extends VariableType {
	/**  **/
	['Dir']: number;
	/**  **/
	['Jump']: string;
	/**  **/
	['MoveDir']: string;
	/**  **/
	['DoubleJump']: string;
}
interface IZoneMyBasa4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IZoneMyBasa4 extends ISpriteInstance {
	instVars: IZoneMyBasa4Vars;
	behaviors: IZoneMyBasa4Behaviors;
}

interface IZoneBucksVars extends VariableType {
	
}
interface IZoneBucksBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IZoneBucks extends ISpriteInstance {
	instVars: IZoneBucksVars;
	behaviors: IZoneBucksBehaviors;
}

interface IZonesVars extends VariableType {
	
}
interface IZonesBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IZones extends ISpriteInstance {
	instVars: IZonesVars;
	behaviors: IZonesBehaviors;
}

interface IWeaponVars extends VariableType {
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
}
interface IWeaponBehaviors extends Record<string, IBehaviorInstance> {
	['oWeaponTimer']: IBehaviorInstance
}
interface IWeapon extends ISpriteInstance {
	instVars: IWeaponVars;
	behaviors: IWeaponBehaviors;
}

interface ICharacterBotTriggerVars extends VariableType {
	/**  **/
	['Color']: string;
	/**  **/
	['ColorMultiple']: number;
	/**  **/
	['Dir1']: number;
	/**  **/
	['DirMultiple']: number;
	/**  **/
	['DefaultMoveDir1']: string;
	/**  **/
	['DefaultJump']: string;
	/**  **/
	['BucksMoveDir1']: string;
	/**  **/
	['BucksJump']: string;
	/**  **/
	['BasaAttackJump']: string;
	/**  **/
	['DefenseJump']: string;
}
interface ICharacterBotTriggerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacterBotTrigger extends ISpriteInstance {
	instVars: ICharacterBotTriggerVars;
	behaviors: ICharacterBotTriggerBehaviors;
}

interface ITriggersVars extends VariableType {
	/**  **/
	['Color']: string;
	/**  **/
	['ColorMultiple']: number;
	/**  **/
	['Dir1']: number;
	/**  **/
	['DirMultiple']: number;
	/**  **/
	['DefaultMoveDir1']: string;
	/**  **/
	['DefaultJump']: string;
	/**  **/
	['BucksMoveDir1']: string;
	/**  **/
	['BucksJump']: string;
	/**  **/
	['BasaAttackJump']: string;
	/**  **/
	['DefenseJump']: string;
}
interface ITriggersBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITriggers extends ISpriteInstance {
	instVars: ITriggersVars;
	behaviors: ITriggersBehaviors;
}

interface ITilemap5Vars extends VariableType {
	
}
interface ITilemap5Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap5 extends ITilemapInstance {
	instVars: ITilemap5Vars;
	behaviors: ITilemap5Behaviors;
}

interface ITilemap2Vars extends VariableType {
	
}
interface ITilemap2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITilemap2 extends ITilemapInstance {
	instVars: ITilemap2Vars;
	behaviors: ITilemap2Behaviors;
}

interface ITilesVars extends VariableType {
	
}
interface ITilesBehaviors extends Record<string, IBehaviorInstance> {
	['Solid']: IBehaviorInstance
}
interface ITiles extends ITilemapInstance {
	instVars: ITilesVars;
	behaviors: ITilesBehaviors;
}

interface ITextVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['ID2']: string;
	/**  **/
	['LocalizationKey']: string;
}
interface ITextBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IText extends ITextInstance {
	instVars: ITextVars;
	behaviors: ITextBehaviors;
}

interface ITextsVars extends VariableType {
	
}
interface ITextsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITexts extends ITextInstance {
	instVars: ITextsVars;
	behaviors: ITextsBehaviors;
}

interface ISyncedVars extends VariableType {
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
}
interface ISyncedBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISynced extends ISpriteInstance {
	instVars: ISyncedVars;
	behaviors: ISyncedBehaviors;
}

interface ISmoothSyncedVars extends VariableType {
	/**  **/
	['TargetX']: number;
	/**  **/
	['TargetY']: number;
}
interface ISmoothSyncedBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISmoothSynced extends ISpriteInstance {
	instVars: ISmoothSyncedVars;
	behaviors: ISmoothSyncedBehaviors;
}

interface IReloadableWeaponVars extends VariableType {
	/**  **/
	['ReloadPreparingDuration']: number;
	/**  **/
	['ReloadBulletDuration']: number;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['MaxBulletCount']: number;
}
interface IReloadableWeaponBehaviors extends Record<string, IBehaviorInstance> {
	['ReloadableWeaponTimer']: IBehaviorInstance
}
interface IReloadableWeapon extends ISpriteInstance {
	instVars: IReloadableWeaponVars;
	behaviors: IReloadableWeaponBehaviors;
}

interface IPlatformMovementVars extends VariableType {
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
}
interface IPlatformMovementBehaviors extends Record<string, IBehaviorInstance> {
	['oPlatform']: IPlatformBehaviorInstance
}
interface IPlatformMovement extends ISpriteInstance {
	instVars: IPlatformMovementVars;
	behaviors: IPlatformMovementBehaviors;
}

interface ISprite17Vars extends VariableType {
	
}
interface ISprite17Behaviors extends Record<string, IBehaviorInstance> {
	['Jumpthru']: IBehaviorInstance
	['Sine']: IBehaviorInstance
	['Solid']: IBehaviorInstance
}
interface ISprite17 extends ISpriteInstance {
	instVars: ISprite17Vars;
	behaviors: ISprite17Behaviors;
}

interface IOnlineObjsVars extends VariableType {
	
}
interface IOnlineObjsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IOnlineObjs extends ISpriteInstance {
	instVars: IOnlineObjsVars;
	behaviors: IOnlineObjsBehaviors;
}

interface IMovementVars extends VariableType {
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
}
interface IMovementBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMovement extends ISpriteInstance {
	instVars: IMovementVars;
	behaviors: IMovementBehaviors;
}

interface IHasNameVars extends VariableType {
	/**  **/
	['Name']: string;
}
interface IHasNameBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHasName extends ISpriteInstance {
	instVars: IHasNameVars;
	behaviors: IHasNameBehaviors;
}

interface IHasHealthVars extends VariableType {
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
}
interface IHasHealthBehaviors extends Record<string, IBehaviorInstance> {
	['HasHealthTimer']: IBehaviorInstance
}
interface IHasHealth extends ISpriteInstance {
	instVars: IHasHealthVars;
	behaviors: IHasHealthBehaviors;
}

interface IExplosionsVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface IExplosionsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IExplosions extends ISpriteInstance {
	instVars: IExplosionsVars;
	behaviors: IExplosionsBehaviors;
}

interface IEmojiesVars extends VariableType {
	
}
interface IEmojiesBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IEmojies extends ISpriteInstance {
	instVars: IEmojiesVars;
	behaviors: IEmojiesBehaviors;
}

interface IStepperCannonAttackDustVars extends VariableType {
	
}
interface IStepperCannonAttackDustBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IStepperCannonAttackDust extends ISpriteInstance {
	instVars: IStepperCannonAttackDustVars;
	behaviors: IStepperCannonAttackDustBehaviors;
}

interface IPatrolAttackVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface IPatrolAttackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPatrolAttack extends ISpriteInstance {
	instVars: IPatrolAttackVars;
	behaviors: IPatrolAttackBehaviors;
}

interface IExplosionVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface IExplosionBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IExplosion extends ISpriteInstance {
	instVars: IExplosionVars;
	behaviors: IExplosionBehaviors;
}

interface IDroneAttackVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface IDroneAttackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDroneAttack extends ISpriteInstance {
	instVars: IDroneAttackVars;
	behaviors: IDroneAttackBehaviors;
}

interface ICyborgAttackExplosionVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface ICyborgAttackExplosionBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICyborgAttackExplosion extends ISpriteInstance {
	instVars: ICyborgAttackExplosionVars;
	behaviors: ICyborgAttackExplosionBehaviors;
}

interface ICannonAttackVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface ICannonAttackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICannonAttack extends ISpriteInstance {
	instVars: ICannonAttackVars;
	behaviors: ICannonAttackBehaviors;
}

interface IBrigandExplosionVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface IBrigandExplosionBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBrigandExplosion extends ISpriteInstance {
	instVars: IBrigandExplosionVars;
	behaviors: IBrigandExplosionBehaviors;
}

interface IBattleDroneAttackVars extends VariableType {
	/**  **/
	['Damage']: number;
	/**  **/
	['oAttackFrameStart']: number;
	/**  **/
	['oAttackFrameEnd']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsBotExplosion']: boolean;
	/**  **/
	['AttackerID']: number;
	/**  **/
	['Color']: string;
}
interface IBattleDroneAttackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBattleDroneAttack extends ISpriteInstance {
	instVars: IBattleDroneAttackVars;
	behaviors: IBattleDroneAttackBehaviors;
}

interface IDestroyOnAnimationFinishedVars extends VariableType {
	
}
interface IDestroyOnAnimationFinishedBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDestroyOnAnimationFinished extends ISpriteInstance {
	instVars: IDestroyOnAnimationFinishedVars;
	behaviors: IDestroyOnAnimationFinishedBehaviors;
}

interface ICharacterScinsVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
	/**  **/
	['OnlineAnimation']: string;
}
interface ICharacterScinsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacterScins extends ISpriteInstance {
	instVars: ICharacterScinsVars;
	behaviors: ICharacterScinsBehaviors;
}

interface ICharacterVars extends VariableType {
	/**  **/
	['oActorNr']: number;
	/**  **/
	['oPlayerNumber']: number;
}
interface ICharacterBehaviors extends Record<string, IBehaviorInstance> {
	['CharacterTimer']: IBehaviorInstance
}
interface ICharacter extends ISpriteInstance {
	instVars: ICharacterVars;
	behaviors: ICharacterBehaviors;
}

interface ICarcasVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['PlayerNumber']: number;
	/**  **/
	['OfflineTImer']: number;
	/**  **/
	['IsOnline']: boolean;
	/**  **/
	['HP']: number;
	/**  **/
	['CharacterName']: string;
	/**  **/
	['XX']: number;
	/**  **/
	['YY']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['Ping']: number;
	/**  **/
	['Direction']: number;
	/**  **/
	['JumpCount']: number;
	/**  **/
	['Damage']: number;
	/**  **/
	['StartX']: number;
	/**  **/
	['StartY']: number;
	/**  **/
	['ShiledTimer']: number;
	/**  **/
	['Bucks']: number;
	/** игрок онлайн и живой **/
	['Ready']: boolean;
	/**  **/
	['OnlineIDChanging']: number;
	/**  **/
	['LastBotID']: number;
	/**  **/
	['NickName']: string;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['AddBulletTimer']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['AttackBlockTimer']: number;
	/**  **/
	['BucksOnDeath']: number;
	/**  **/
	['BotCondition']: string;
	/**  **/
	['Bot1Name']: string;
	/**  **/
	['Bot2Name']: string;
	/**  **/
	['Bot3Name']: string;
	/**  **/
	['BotMessage']: string;
	/**  **/
	['BotMessageX']: number;
	/**  **/
	['BotMessageY']: number;
}
interface ICarcasBehaviors extends Record<string, IBehaviorInstance> {
	['Platform']: IPlatformBehaviorInstance
	['Timer']: IBehaviorInstance
}
interface ICarcas extends ISpriteInstance {
	instVars: ICarcasVars;
	behaviors: ICarcasBehaviors;
}

interface ICyborgBulletVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface ICyborgBulletBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICyborgBullet extends ISpriteInstance {
	instVars: ICyborgBulletVars;
	behaviors: ICyborgBulletBehaviors;
}

interface IStepperCannonAttackVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface IStepperCannonAttackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IStepperCannonAttack extends ISpriteInstance {
	instVars: IStepperCannonAttackVars;
	behaviors: IStepperCannonAttackBehaviors;
}

interface IBikerBulletVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface IBikerBulletBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBikerBullet extends ISpriteInstance {
	instVars: IBikerBulletVars;
	behaviors: IBikerBulletBehaviors;
}

interface IBombVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface IBombBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBomb extends ISpriteInstance {
	instVars: IBombVars;
	behaviors: IBombBehaviors;
}

interface IAlarmbotBulletVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface IAlarmbotBulletBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAlarmbotBullet extends ISpriteInstance {
	instVars: IAlarmbotBulletVars;
	behaviors: IAlarmbotBulletBehaviors;
}

interface IPunkBulletVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface IPunkBulletBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPunkBullet extends ISpriteInstance {
	instVars: IPunkBulletVars;
	behaviors: IPunkBulletBehaviors;
}

interface ICanHurtVars extends VariableType {
	/**  **/
	['DamageOnCollision']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['WeaponUID']: number;
	/**  **/
	['SpawnExplosionOnDestroy']: boolean;
	/**  **/
	['ExplosionInstanceName']: string;
	/**  **/
	['ExplosionTemplate']: string;
}
interface ICanHurtBehaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
}
interface ICanHurt extends ISpriteInstance {
	instVars: ICanHurtVars;
	behaviors: ICanHurtBehaviors;
}

interface ICanBucksCollectVars extends VariableType {
	
}
interface ICanBucksCollectBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICanBucksCollect extends ISpriteInstance {
	instVars: ICanBucksCollectVars;
	behaviors: ICanBucksCollectBehaviors;
}

interface IMessageButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
	/**  **/
	['Message']: string;
}
interface IMessageButtonBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IMessageButton extends ISpriteInstance {
	instVars: IMessageButtonVars;
	behaviors: IMessageButtonBehaviors;
}

interface IEmojiButtonBackVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
	/**  **/
	['EmojiName']: string;
	/**  **/
	['Type']: string;
}
interface IEmojiButtonBackBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IEmojiButtonBack extends ISpriteInstance {
	instVars: IEmojiButtonBackVars;
	behaviors: IEmojiButtonBackBehaviors;
}

interface IEmojiButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IEmojiButtonBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IEmojiButton extends ISpriteInstance {
	instVars: IEmojiButtonVars;
	behaviors: IEmojiButtonBehaviors;
}

interface IGraphicsSettings2Vars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IGraphicsSettings2Behaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IGraphicsSettings2 extends ISpriteInstance {
	instVars: IGraphicsSettings2Vars;
	behaviors: IGraphicsSettings2Behaviors;
}

interface IChangeCharacterArrowVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
	/**  **/
	['Next']: boolean;
}
interface IChangeCharacterArrowBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IChangeCharacterArrow extends ISpriteInstance {
	instVars: IChangeCharacterArrowVars;
	behaviors: IChangeCharacterArrowBehaviors;
}

interface ITopVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface ITopBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface ITop extends ISpriteInstance {
	instVars: ITopVars;
	behaviors: ITopBehaviors;
}

interface IAddBotVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IAddBotBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IAddBot extends ISpriteInstance {
	instVars: IAddBotVars;
	behaviors: IAddBotBehaviors;
}

interface IexitVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IexitBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface Iexit extends ISpriteInstance {
	instVars: IexitVars;
	behaviors: IexitBehaviors;
}

interface IBuyButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IBuyButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBuyButton extends ISpriteInstance {
	instVars: IBuyButtonVars;
	behaviors: IBuyButtonBehaviors;
}

interface IOKVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IOKBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IOK extends ISpriteInstance {
	instVars: IOKVars;
	behaviors: IOKBehaviors;
}

interface IAddFriendButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IAddFriendButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAddFriendButton extends ISpriteInstance {
	instVars: IAddFriendButtonVars;
	behaviors: IAddFriendButtonBehaviors;
}

interface IChangeCharacterButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
	/**  **/
	['Dir']: string;
}
interface IChangeCharacterButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IChangeCharacterButton extends ISpriteInstance {
	instVars: IChangeCharacterButtonVars;
	behaviors: IChangeCharacterButtonBehaviors;
}

interface IButtonsVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IButtonsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IButtons extends ISpriteInstance {
	instVars: IButtonsVars;
	behaviors: IButtonsBehaviors;
}

interface IBucks2Vars extends VariableType {
	/**  **/
	['Visible']: boolean;
}
interface IBucks2Behaviors extends Record<string, IBehaviorInstance> {
	['Timer']: IBehaviorInstance
}
interface IBucks2 extends ISpriteInstance {
	instVars: IBucks2Vars;
	behaviors: IBucks2Behaviors;
}

interface IBucksVars extends VariableType {
	/**  **/
	['Visible']: boolean;
}
interface IBucksBehaviors extends Record<string, IBehaviorInstance> {
	['Timer']: IBehaviorInstance
}
interface IBucks extends ISpriteInstance {
	instVars: IBucksVars;
	behaviors: IBucksBehaviors;
}

interface IBucks1Vars extends VariableType {
	
}
interface IBucks1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBucks1 extends ISpriteInstance {
	instVars: IBucks1Vars;
	behaviors: IBucks1Behaviors;
}

interface IBotMobVars extends VariableType {
	
}
interface IBotMobBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotMob extends ISpriteInstance {
	instVars: IBotMobVars;
	behaviors: IBotMobBehaviors;
}

interface IBot2Vars extends VariableType {
	/**  **/
	['ColorBot2']: string;
}
interface IBot2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBot2 extends ISpriteInstance {
	instVars: IBot2Vars;
	behaviors: IBot2Behaviors;
}

interface IBotVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
}
interface IBotBehaviors extends Record<string, IBehaviorInstance> {
	['Platform']: IPlatformBehaviorInstance
	['Timer']: IBehaviorInstance
}
interface IBot extends ISpriteInstance {
	instVars: IBotVars;
	behaviors: IBotBehaviors;
}

interface I3DShape19Vars extends VariableType {
	/**  **/
	['Color']: string;
	/**  **/
	['HP']: number;
	/**  **/
	['Hurting']: boolean;
}
interface I3DShape19Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface I3DShape19 extends IWorldInstance {
	instVars: I3DShape19Vars;
	behaviors: I3DShape19Behaviors;
}

interface IBasaRedVars extends VariableType {
	/**  **/
	['Color']: string;
	/**  **/
	['HP']: number;
	/**  **/
	['Hurting']: boolean;
}
interface IBasaRedBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBasaRed extends IWorldInstance {
	instVars: IBasaRedVars;
	behaviors: IBasaRedBehaviors;
}

interface IBasaVars extends VariableType {
	/**  **/
	['Color']: string;
	/**  **/
	['HP']: number;
	/**  **/
	['Hurting']: boolean;
}
interface IBasaBehaviors extends Record<string, IBehaviorInstance> {
	['Solid']: IBehaviorInstance
}
interface IBasa extends IWorldInstance {
	instVars: IBasaVars;
	behaviors: IBasaBehaviors;
}

interface ICharacterAttackVars extends VariableType {
	
}
interface ICharacterAttackBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacterAttack extends ISpriteInstance {
	instVars: ICharacterAttackVars;
	behaviors: ICharacterAttackBehaviors;
}

interface IDroneAttack2Vars extends VariableType {
	
}
interface IDroneAttack2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDroneAttack2 extends ISpriteInstance {
	instVars: IDroneAttack2Vars;
	behaviors: IDroneAttack2Behaviors;
}

interface IBattleDroneAttack2Vars extends VariableType {
	
}
interface IBattleDroneAttack2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBattleDroneAttack2 extends ISpriteInstance {
	instVars: IBattleDroneAttack2Vars;
	behaviors: IBattleDroneAttack2Behaviors;
}

interface IAttackViewVars extends VariableType {
	
}
interface IAttackViewBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAttackView extends ISpriteInstance {
	instVars: IAttackViewVars;
	behaviors: IAttackViewBehaviors;
}

interface IArrowsTutorialVars extends VariableType {
	
}
interface IArrowsTutorialBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IArrowsTutorial extends ISpriteInstance {
	instVars: IArrowsTutorialVars;
	behaviors: IArrowsTutorialBehaviors;
}

interface IAnimatedButtonsVars extends VariableType {
	
}
interface IAnimatedButtonsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAnimatedButtons extends ISpriteInstance {
	instVars: IAnimatedButtonsVars;
	behaviors: IAnimatedButtonsBehaviors;
}

interface IGraphicsSettings4Vars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IGraphicsSettings4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IGraphicsSettings4 extends ISpriteInstance {
	instVars: IGraphicsSettings4Vars;
	behaviors: IGraphicsSettings4Behaviors;
}

interface IGraphicsSettings3Vars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IGraphicsSettings3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IGraphicsSettings3 extends ISpriteInstance {
	instVars: IGraphicsSettings3Vars;
	behaviors: IGraphicsSettings3Behaviors;
}

interface IBtnVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IBtnBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBtn extends ISpriteInstance {
	instVars: IBtnVars;
	behaviors: IBtnBehaviors;
}

interface IStartButton2Vars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IStartButton2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IStartButton2 extends ISpriteInstance {
	instVars: IStartButton2Vars;
	behaviors: IStartButton2Behaviors;
}

interface IGraphicsVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IGraphicsBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IGraphics extends ISpriteInstance {
	instVars: IGraphicsVars;
	behaviors: IGraphicsBehaviors;
}

interface IPingVars extends VariableType {
	
}
interface IPingBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPing extends ISpriteInstance {
	instVars: IPingVars;
	behaviors: IPingBehaviors;
}

interface IStartButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IStartButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IStartButton extends ISpriteInstance {
	instVars: IStartButtonVars;
	behaviors: IStartButtonBehaviors;
}

interface IHPBarBackUIVars extends VariableType {
	/**  **/
	['Spawning']: boolean;
}
interface IHPBarBackUIBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHPBarBackUI extends ISpriteInstance {
	instVars: IHPBarBackUIVars;
	behaviors: IHPBarBackUIBehaviors;
}

interface IBotBuyButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
	/**  **/
	['BuyTimer']: number;
	/**  **/
	['BotNumber']: number;
	/**  **/
	['BotName']: string;
}
interface IBotBuyButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotBuyButton extends ISpriteInstance {
	instVars: IBotBuyButtonVars;
	behaviors: IBotBuyButtonBehaviors;
}

interface IJumpArrow2Vars extends VariableType {
	
}
interface IJumpArrow2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IJumpArrow2 extends ISpriteInstance {
	instVars: IJumpArrow2Vars;
	behaviors: IJumpArrow2Behaviors;
}

interface ISprite23Vars extends VariableType {
	
}
interface ISprite23Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite23 extends ISpriteInstance {
	instVars: ISprite23Vars;
	behaviors: ISprite23Behaviors;
}

interface IAttackButtonVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['superCount']: number;
	/**  **/
	['Kills']: number;
}
interface IAttackButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAttackButton extends ISpriteInstance {
	instVars: IAttackButtonVars;
	behaviors: IAttackButtonBehaviors;
}

interface ILeftArrowVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface ILeftArrowBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILeftArrow extends ISpriteInstance {
	instVars: ILeftArrowVars;
	behaviors: ILeftArrowBehaviors;
}

interface IJumpArrowVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IJumpArrowBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IJumpArrow extends ISpriteInstance {
	instVars: IJumpArrowVars;
	behaviors: IJumpArrowBehaviors;
}

interface IRightArrowVars extends VariableType {
	/**  **/
	['Scale1']: number;
	/**  **/
	['Scale2']: number;
	/**  **/
	['DefaultScale']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['Value']: string;
}
interface IRightArrowBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IRightArrow extends ISpriteInstance {
	instVars: IRightArrowVars;
	behaviors: IRightArrowBehaviors;
}

interface IAnchorVars extends VariableType {
	
}
interface IAnchorBehaviors extends Record<string, IBehaviorInstance> {
	['Anchor']: IBehaviorInstance
}
interface IAnchor extends ISpriteInstance {
	instVars: IAnchorVars;
	behaviors: IAnchorBehaviors;
}

interface IBasaBlueVars extends VariableType {
	/**  **/
	['HP']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
}
interface IBasaBlueBehaviors extends Record<string, IBehaviorInstance> {
	['Solid']: IBehaviorInstance
}
interface IBasaBlue extends ISpriteInstance {
	instVars: IBasaBlueVars;
	behaviors: IBasaBlueBehaviors;
}

interface ISprite20Vars extends VariableType {
	
}
interface ISprite20Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite20 extends ISpriteInstance {
	instVars: ISprite20Vars;
	behaviors: ISprite20Behaviors;
}

interface IBotIconVars extends VariableType {
	
}
interface IBotIconBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBotIcon extends ISpriteInstance {
	instVars: IBotIconVars;
	behaviors: IBotIconBehaviors;
}

interface I1WithHPObjVars extends VariableType {
	
}
interface I1WithHPObjBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I1WithHPObj extends ISpriteInstance {
	instVars: I1WithHPObjVars;
	behaviors: I1WithHPObjBehaviors;
}

interface ICharacterColliderVars extends VariableType {
	/**  **/
	['ID']: number;
	/**  **/
	['OnlineID']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['PlayerNumber']: number;
	/**  **/
	['OfflineTImer']: number;
	/**  **/
	['IsOnline']: boolean;
	/**  **/
	['HP']: number;
	/**  **/
	['CharacterName']: string;
	/**  **/
	['XX']: number;
	/**  **/
	['YY']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['Ping']: number;
	/**  **/
	['Direction']: number;
	/**  **/
	['JumpCount']: number;
	/**  **/
	['Damage']: number;
	/**  **/
	['StartX']: number;
	/**  **/
	['StartY']: number;
	/**  **/
	['ShiledTimer']: number;
	/**  **/
	['Bucks']: number;
	/** игрок онлайн и живой **/
	['Ready']: boolean;
	/**  **/
	['OnlineIDChanging']: number;
	/**  **/
	['LastBotID']: number;
	/**  **/
	['NickName']: string;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['AddBulletTimer']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['AttackBlockTimer']: number;
	/**  **/
	['BucksOnDeath']: number;
	/**  **/
	['BotCondition']: string;
	/**  **/
	['Bot1Name']: string;
	/**  **/
	['Bot2Name']: string;
	/**  **/
	['Bot3Name']: string;
	/**  **/
	['BotMessage']: string;
	/**  **/
	['BotMessageX']: number;
	/**  **/
	['BotMessageY']: number;
}
interface ICharacterColliderBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICharacterCollider extends ISpriteInstance {
	instVars: ICharacterColliderVars;
	behaviors: ICharacterColliderBehaviors;
}

interface I1BotsAndCharactersVars extends VariableType {
	
}
interface I1BotsAndCharactersBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I1BotsAndCharacters extends ISpriteInstance {
	instVars: I1BotsAndCharactersVars;
	behaviors: I1BotsAndCharactersBehaviors;
}

interface IStepperCannonVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IStepperCannonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IStepperCannon extends ISpriteInstance {
	instVars: IStepperCannonVars;
	behaviors: IStepperCannonBehaviors;
}

interface IShockBotVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IShockBotBehaviors extends Record<string, IBehaviorInstance> {
	['Tween']: IBehaviorInstance
}
interface IShockBot extends ISpriteInstance {
	instVars: IShockBotVars;
	behaviors: IShockBotBehaviors;
}

interface IPunkVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['oActorNr']: number;
	/**  **/
	['oPlayerNumber']: number;
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
	/**  **/
	['OnlineAnimation']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['ReloadPreparingDuration']: number;
	/**  **/
	['ReloadBulletDuration']: number;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['MaxBulletCount']: number;
	/**  **/
	['TargetX']: number;
	/**  **/
	['TargetY']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IPunkBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPunk extends ISpriteInstance {
	instVars: IPunkVars;
	behaviors: IPunkBehaviors;
}

interface IPatrolVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IPatrolBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPatrol extends ISpriteInstance {
	instVars: IPatrolVars;
	behaviors: IPatrolBehaviors;
}

interface IHammerVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IHammerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHammer extends ISpriteInstance {
	instVars: IHammerVars;
	behaviors: IHammerBehaviors;
}

interface IDroneVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IDroneBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IDrone extends ISpriteInstance {
	instVars: IDroneVars;
	behaviors: IDroneBehaviors;
}

interface ICopterVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface ICopterBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICopter extends ISpriteInstance {
	instVars: ICopterVars;
	behaviors: ICopterBehaviors;
}

interface ICyborgVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['oActorNr']: number;
	/**  **/
	['oPlayerNumber']: number;
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
	/**  **/
	['OnlineAnimation']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['ReloadPreparingDuration']: number;
	/**  **/
	['ReloadBulletDuration']: number;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['MaxBulletCount']: number;
	/**  **/
	['TargetX']: number;
	/**  **/
	['TargetY']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface ICyborgBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICyborg extends ISpriteInstance {
	instVars: ICyborgVars;
	behaviors: ICyborgBehaviors;
}

interface ICannonVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface ICannonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ICannon extends ISpriteInstance {
	instVars: ICannonVars;
	behaviors: ICannonBehaviors;
}

interface IBrigandVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['oActorNr']: number;
	/**  **/
	['oPlayerNumber']: number;
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
	/**  **/
	['OnlineAnimation']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['ReloadPreparingDuration']: number;
	/**  **/
	['ReloadBulletDuration']: number;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['MaxBulletCount']: number;
	/**  **/
	['TargetX']: number;
	/**  **/
	['TargetY']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IBrigandBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBrigand extends ISpriteInstance {
	instVars: IBrigandVars;
	behaviors: IBrigandBehaviors;
}

interface IBomjVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['oActorNr']: number;
	/**  **/
	['oPlayerNumber']: number;
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
	/**  **/
	['OnlineAnimation']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['ReloadPreparingDuration']: number;
	/**  **/
	['ReloadBulletDuration']: number;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['MaxBulletCount']: number;
	/**  **/
	['TargetX']: number;
	/**  **/
	['TargetY']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
}
interface IBomjBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBomj extends ISpriteInstance {
	instVars: IBomjVars;
	behaviors: IBomjBehaviors;
}

interface IBikerVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['oActorNr']: number;
	/**  **/
	['oPlayerNumber']: number;
	/**  **/
	['ID']: number;
	/**  **/
	['Hurting']: boolean;
	/**  **/
	['OnlineAnimation']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['Name']: string;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['ReloadPreparingDuration']: number;
	/**  **/
	['ReloadBulletDuration']: number;
	/**  **/
	['BulletCount']: number;
	/**  **/
	['MaxBulletCount']: number;
	/**  **/
	['TargetX']: number;
	/**  **/
	['TargetY']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IBikerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBiker extends ISpriteInstance {
	instVars: IBikerVars;
	behaviors: IBikerBehaviors;
}

interface IBattleDroneVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IBattleDroneBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBattleDrone extends ISpriteInstance {
	instVars: IBattleDroneVars;
	behaviors: IBattleDroneBehaviors;
}

interface IAlarmbotVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
	/**  **/
	['ID']: number;
	/**  **/
	['BotOnlineID']: number;
	/**  **/
	['MaxHP']: number;
	/**  **/
	['BotID']: number;
	/**  **/
	['Color']: string;
	/**  **/
	['IsSpawning']: boolean;
	/**  **/
	['Damage']: number;
	/**  **/
	['HPBarHeight']: number;
	/**  **/
	['FlyHeight']: number;
	/**  **/
	['FlySpeed']: number;
	/**  **/
	['AttackMode']: number;
	/**  **/
	['AttackXX']: number;
	/**  **/
	['AttackWait']: number;
	/**  **/
	['IsDeath']: boolean;
	/**  **/
	['ColorBot2']: string;
	/**  **/
	['oHealth']: number;
	/**  **/
	['oMaxHealth']: number;
	/**  **/
	['CanDamage']: boolean;
	/**  **/
	['HealTimer']: number;
	/**  **/
	['CanHeal']: boolean;
	/**  **/
	['HealCount']: number;
	/**  **/
	['oIsReady']: boolean;
	/**  **/
	['MovementActive']: boolean;
	/**  **/
	['MovementHorizontal']: number;
	/**  **/
	['MovementVertical']: number;
	/**  **/
	['oPlatformMoveDir']: number;
	/**  **/
	['oPlatformJumpCount']: number;
	/**  **/
	['oID']: string;
	/**  **/
	['oIsOnline']: number;
	/**  **/
	['oOnlineActorNr']: number;
	/**  **/
	['oOnlineActorNrChanging']: number;
	/**  **/
	['BulletName']: string;
	/**  **/
	['BulletTemplate']: string;
	/**  **/
	['oDamage']: number;
	/**  **/
	['TimeToSpawnBullet']: number;
	/**  **/
	['SyncPosOnAttack']: boolean;
	/**  **/
	['Attacking']: boolean;
	/**  **/
	['Frequency']: number;
	/**  **/
	['eReloadingTime']: number;
	/**  **/
	['eBulletCount']: number;
	/**  **/
	['eMaxBulletCount']: number;
	/**  **/
	['oColor']: string;
}
interface IAlarmbotBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAlarmbot extends ISpriteInstance {
	instVars: IAlarmbotVars;
	behaviors: IAlarmbotBehaviors;
}

interface I0MobVars extends VariableType {
	/**  **/
	['oOnlineAnim']: string;
}
interface I0MobBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface I0Mob extends ISpriteInstance {
	instVars: I0MobVars;
	behaviors: I0MobBehaviors;
}


interface IInstance {
    addEventListener(eventName: 'destroy', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'destroy', callback: (...params: unknown[]) => void): void;
    dispatchEvent(e: Event): void;
    runtime: IRuntime;
    objectType: IObjectClass;
    instVars: VariableType;
    behaviors: Record<string, IBehaviorInstance>;
    readonly uid: number;
    destroy(): void;
}
declare var IInstance: { new(): IInstance };

interface I3DCameraObjectType extends IObjectClass {
    lookAtPosition(camerax: number, cameraY: number, cameraZ: number, lookX: number, lookY: number, lookZ: number, upX: number, upY: number, upZ: number): void;
    lookParallelToLayout(cameraX: number, cameraY: number, cameraZ: number, lookAngle: number): void;
    restore2DCamera(): void;
    moveAlongLayoutAxis(distance: number, axis: 'x' | 'y' | 'z', which: 'camera' | 'look' | 'both'): void;
    moveAlongCameraAxis(distance: number, axis: 'forward' | 'up' | 'right', which: 'camera' | 'look' | 'both'): void;
    getCameraPosition(): [number, number, number];
    getLookPosition(): [number, number, number];
    getForwardVector(): [number, number, number];
    getForwardVector(): [number, number, number];
    getUpVector(): [number, number, number];
    readonly zScale: number;
}

interface I3DShapeInstance extends IWorldInstance {
    shape: 'box' | 'prism' | 'wedge' | 'pyramid' | 'corner-out' | 'corner-in';
    zHeight: number;
    setFaceVisible(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', visible: boolean): void;
    isFaceVisible(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom'): boolean;
    setFaceImage(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', image: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom'): void;
    setFaceObject(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', objectClass: IObjectClass): void;
    zTilingFactor: number;
    getImagePointCount(): number;
    getImagePointX(nameOrIndex: string | number): number
    getImagePointY(nameOrIndex: string | number): number
    getImagePoint(nameOrIndex: string | number): [number, number]
}
declare var I3DShapeInstance: undefined | { new(): I3DShapeInstance };

interface IArrayInstance extends IWorldInstance {
    width: number;
    height: number;
    depth: number;
    setSize(width: number, height?: number, depth?: number): void;
    getAt(x?: number, y?: number, z?: number): string | number;
    setAt(val: string | number, x: number, y?: number, z?: number): void;
}
declare var IArrayInstance: undefined | { new(): IArrayInstance };

interface IAudioObjectType extends IObjectClass {
    audioContext: AudioContext;
    destinationNode: unknown;
}
declare var IAudioObjectType: undefined | { new(): IAudioObjectType };

interface IBinaryDataInstance extends IInstance {
    setArrayBufferCopy(viewOrBuffer: ArrayBuffer | DataView): void;
    setArrayBufferTransfer(arrayBuffer: ArrayBuffer): void;
    getArrayBufferCopy(): ArrayBuffer;
    getArrayBufferReadOnly(): ArrayBuffer;
}
declare var IBinaryDataInstance: undefined | { new(): IBinaryDataInstance };

interface IButtonInstance extends IDOMInstance {
    addEventListener(eventName: 'click', callback: (...params: unknown[]) => void): void;
    text: string;
    tooltip: string;
    isEnabled: boolean;
    isChecked: false;
}
declare var IButtonInstance: undefined | { new(): IButtonInstance };

interface IDictionaryInstance extends IInstance {
    getDataMap(): Record<string, string | number>;
}
declare var IDictionaryInstance: undefined | { new(): IDictionaryInstance };

interface IDrawingCanvasInstance extends IWorldInstance {
    readonly surfaceDeviceWidth: number;    
    readonly surfaceDeviceHeight:  number;
    getImagePixelData: Promise<ImageData>;
    loadImagePixelData(imageData: ImageData, premultiplyAlpha?: boolean): void;  
}
declare var IDrawingCanvasInstance: undefined | { new(): IDrawingCanvasInstance };

interface IJsonInstance extends IInstance {
    getJsonDataCopy(): unknown;
    setJsonDataCopy(object: unknown): void;
    setJsonString(string: string): void;
    toCompactString(): string;
    toBeautifiedString(): string;
}
declare var IJsonInstance: undefined | { new(): IJsonInstance };

interface ISliderBarInstance extends IDOMInstance {
    addEventListener(eventName: 'click' | 'change', callback: (...params: unknown[]) => void): void;
    value: number;
    maximum: number;
    minimum: number;
    step: number;
    tooltip: string;
    isEnabled: boolean;
}
declare var ISliderBarInstance: undefined | { new(): ISliderBarInstance };

interface ISpriteInstance extends IWorldInstance {
    setAnimation(animationName: string, from?: 'beginning' | 'current-frame'): void;
    readonly animationName: string;
    startAnimation(from?: 'current-frame' | 'begininng'): void;
    stopAnimation(): void;
    animationFrame: number;
    animationSpeed: number;
    animationRepeatToFrame: number;
    readonly imageWidth: number;
    readonly imageHeight: number;
    getImagePointCount(): number;
    getImagePointX(nameOrIndex: string | number): number;
    getImagePointY(nameOrIndex: string | number): number;
    getImagePoint(nameOrIndex: string | number): [number | number];
    getPolyPointCount(): number;
    getPolyPointX(index: number): number;
    getPolyPointY(index: number): number;
    getPolyPoint(index: number): [number | number];
}
declare var ISpriteInstance: undefined | { new(): ISpriteInstance };

interface ISpriteFontInstance extends IWorldInstance {
    text: string;
    typewriterText(text: string, duration: number): void;
    typewriterFinish(): void;
    characterScale: number;
    characterSpacing: number;
    lineHeight: number;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    wordWrapMode: 'word' | 'character';
}
declare var ISpriteFontInstance: undefined | { new(): ISpriteFontInstance };

interface ITextInstance extends IWorldInstance {
    text: string;
    typewriterText(text: string, duration: number): void;
    typewriterFinish(): void;
    fontColor: [number, number, number];
    fontFace: string;
    isBold: boolean;
    isItalic: boolean;
    sizePt: number;
    lineHeight: number;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    wordWrapMode: 'word' | 'character';
    textWidth: number;
    textHeight: number;
}
declare var ITextInstance: undefined | { new(): ITextInstance };

interface ITextInputInstance extends IDOMInstance {
    addEventListener(eventName: 'click' | 'dblclick' | 'change', callback: (...params: unknown[]) => void): void;
    text: string;
    placeholder: string;
    tooltip: string;
    isEnabled: boolean;
    isReadOnly: boolean;
    scrollToBottom(): void;
    maxLength: number;
}
declare var ITextInputInstance: undefined | { new(): ITextInputInstance };

interface ITiledBackgroundInstance extends IWorldInstance {
    imageHeight: number;
    imageWidth: number;
    imageOffsetX: number;
    imageOffsetY: number;
    imageScaleX: number;
    imageScaleY: number;
    imageAngle: number;
    imageAngleDegrees: number;
}
declare var ITiledBackgroundInstance: undefined | { new(): ITiledBackgroundInstance };

interface ITilemapInstance extends IWorldInstance {
    TILE_FLIPPED_HORIZONTAL: -0x80000000;
    TILE_FLIPPED_VERTICAL: 0x40000000;
    TILE_FLIPPED_DIAGONAL: 0x20000000;
    TILE_FLAGS_MASK: 0xE0000000;
    TILE_ID_MASK: 0x1FFFFFFF;

    readonly mapWidth: number;
    readonly mapHeight: number;
    readonly mapDisplayHeight: number;
    readonly mapDisplayWidth: number;
    readonly tileWidth: number;
    readonly tileHeight: number;
    getTileAt(x: number, y: number): number;
    setTileAt(x: number, y: number, tile: number): void;
}
declare var ITilemapInstance: undefined | { new(): ITilemapInstance };

interface IDOMInstance {
    focus(): void;
    blur(): void;
    setCssStyle(prop: string, value: string): void;
    getElement(): HTMLElement;
}
declare var IDOMInstance: undefined | { new(): IDOMInstance };

interface IWorldInstance extends IInstance  {
    layout: ILayout;
    layer: ILayer;
    x: number;
    y: number;
    zElevation: number;
    readonly totalZElevation: number;
    width: number;
    height: number;
    angle: number;
    angleDegrees: number;
    getBoundingBox(): DOMRect;
    getBoundingQuad(): DOMQuad;
    isVisible: boolean;
    opacity: boolean;
    colorRgb: [number, number, number];
    blendMode: 'normal' | 'additive' | 'copy' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop';
    effects: Array<IEffectInstance>;
    moveToTop(): void;
    moveToBottom(): void;
    moveToLayer(layer: ILayer): void;
    moveAdjacentToInstance(other: IWorldInstance, isAfter: boolean): void;
    readonly zIndex: number;
    containsPoint(x: number, y: number): boolean;
    testOverlap(worldInstance: IWorldInstance): boolean;
    testOverlapSolid(): IWorldInstance | null;
    createMesh(hSize: number, vSize: number): void;
    releaseMesh(): void;
    setMeshPoint(col: number, row: number, options: { mode?: 'absolute' | 'relative', x?: number, y?: number, u?: number, v?: number, zElevation?: number}): void;
    getMeshSize(): [number, number];
    getParent(): IWorldInstance | null;
    getTopParent(): IWorldInstance | null;
    parents(): Iterator<IWorldInstance>;
    getChildCount(): number;
    getChildAt(index: number): IWorldInstance | null;
    children(): Iterator<IWorldInstance>;
    allChildren(): Iterator<IWorldInstance>;
    addChild(worldInstance: IWorldInstance, options?: { transformX?: boolean, transformY?: boolean,transformWidth?: boolean,transformHeight?: boolean, transformAngle?: boolean,transformZElevation?: boolean,destroyWithParent?: boolean }): void;
    removeChild(worldInstance: IWorldInstance): void;
    removeFromParent(worldInstance: IWorldInstance): void;
}
declare var IWorldInstance: { new(): IWorldInstance };


interface IBehavior {
    getAllInstances(): Array<IInstance>;
}
declare var IBehavior: { new(): IBehavior };

interface IBehaviorInstance {
    dispatchEvent(e: Event): void;
    instance: IInstance;
    behavior: IBehavior;
    runtime: IRuntime;
}
declare var IBehaviorInstance: { new(): IBehaviorInstance };

interface I8DirectionBehaviorInstance extends IBehaviorInstance {
    stop(): void;
    reverse(): void;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    vectorX: number;
    vectorY: number;
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}
declare var I8DirectionBehaviorInstance: undefined | { new(): I8DirectionBehaviorInstance };

interface IBulletBehaviorInstance extends IBehaviorInstance {
    speed: number;
    acceleration: number;
    gravity: number;
    angleOfMotion: number;
    bounceOffSolids: number;
    distanceTravelled: number;
    isEnabled: boolean;
}
declare var IBulletBehaviorInstance: undefined | { new(): IBulletBehaviorInstance };

interface ICarBehaviorInstance extends IBehaviorInstance {
    stop(): void;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    readonly vectorX: number;
    readonly vectorY: number;
    readonly angleOfMotion: number;
    steerSpeed: number;
    driftRecover: number;
    friction: number;
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}

declare var ICarBehaviorInstance: undefined | { new(): ICarBehaviorInstance };

interface ILOSBehaviorInstance extends IBehaviorInstance {
    range: number;
    coneOfView: number;
    hasLOStoPosition(x: number, y: number): boolean;
    hasLOSBetweenPositions(fromX: number, fromY: number, fromAngle: number, toX: number, toY: number): boolean;
    castRay(fromX: number, fromY: number, toX: number, toY: number, useCollisionCells?: boolean): ILOSBehaviorRay;
    ray: ILOSBehaviorRay;
}

declare var ILOSBehaviorInstance: undefined | { new(): ILOSBehaviorInstance };

interface ILOSBehaviorRay {
    readonly didCollide: boolean;
    readonly hitX: boolean;
    readonly hitY: boolean;
    readonly hitDistance: boolean;
    readonly hitUid: number;
    getNormalX(length: number): number;
    getNormalY(length: number): number;
    getReflectionX(length: number): number;
    getReflectionY(length: number): number;
    readonly reflectionAngle: number;
}

interface IMoveToBehaviorInstance extends IBehaviorInstance {
    addEventListener(type: 'arrived' | 'hitSolid', callback: (...params: unknown[]) => void, capture?: boolean): void;
    removeEventListener(type: 'arrived' | 'hitSolid', callback: (...params: unknown[]) => void, capture?: boolean): void;
    moveToPosition(x: number, y: number, isDirect?: boolean): void
    getTargetX(): number
    getTargetY(): number
    getTargetPosition(): [number, number]
    getWaypointCount(): number
    getWaypointX(index: number): number
    getWaypointY(index: number): number
    getWaypoint(index: number): [number, number]
    stop(): void
    readonly isMoving: boolean
    speed: number
    maxSpeed: number
    acceleration: number
    deceleration: number
    angleOfMotion: number
    rotateSpeed: number;
    isStopOnSolids: boolean;
    isEnabled: boolean;
}

declare var IMoveToBehaviorInstance: undefined | { new(): IMoveToBehaviorInstance };

interface IPathfindingBehaviorInstance extends IBehaviorInstance {
    addEventListener(type: 'arrived', callback: (...params: unknown[]) => void, capture?: boolean): void;
    removeEventListener(type: 'arrived', callback: (...params: unknown[]) => void, capture?: boolean): void;
    map: IPathfindingMap;
    findPath(x: number, y: number): Promise<boolean>;
    startMoving(): void;
    stop(): void;
    maxSpeed: number;
    speed: number;
    acceleration: number;
    deceleration: number;
    rotateSpeed: number;
    readonly isCalculatingPath: boolean;
    readonly isMoving: boolean;
    currentMode: number;
    getNodeCount(): number;
    getNodeXAt(i: number): number;
    getNodeYAt(i: number): number;
    getNodeAt(i: number): [number, number];
    isEnabled: boolean;
}

declare var IPathfindingBehaviorInstance: undefined | { new(): IPathfindingBehaviorInstance };

interface IPathfindingMap {
    isCellObstacle(x: number, y: number): boolean;
    isDiagonalsEnabled: boolean;
    regenerateMap(): Promise<void>;
    regenerateRegion(startX: number, startY: number, endX: number, endY: number): Promise<void>;
    regenerateObjectRegion(objectClass: IObjectClass): Promise<void>;
}

interface IPhysicsBehavior {
    worldGravity: boolean;
    steppingMode: 'fixed' | 'variable';
    velocityIterations: number;
    positionIterations: number;
    setCollisionsEnabled(iObjectClassA: IObjectClass, iObjectClassB: IObjectClass, state: boolean): void;
}

declare var IPhysicsBehavior: undefined | { new(): IPhysicsBehavior };

interface IPhysicsBehaviorInstance extends IBehaviorInstance {
    isEnabled: boolean;
    applyForce(forceX: number, forceY: number, imagePoint?: number): void;
    applyForceTowardPosition(force: number, x: number, y: number, imagePoint?: number): void;
    applyForceAtAngle(force: number, angle: number, imagePoint?: number): void;
    applyImpulse(impluseX: number, impluseY: number, imagePoint?: number): void;
    applyImpulseTowardPosition(impulse: number, x: number, y: number, imagePoint?: number): void;
    applyImpulseAtAngle(impulse: number, angle: number, imagePoint?: number): void;
    applyTorque(torque: number): void;
    applyTorqueToAngle(torque: number, angle: number): void;
    applyTorqueToPosition(torque: number, x: number, y: number): void;
    setVelocity(velocityX: number, velocityY: number): void;
    geVelocityX(): number;
    geVelocityY(): number;
    geVelocity(): [number, number];
    angularVelocity: number;
    isImmovable: boolean;
    isPreventRotation: boolean;
    density: number;
    friction: number;
    elasticity: number;
    linearDamping: number;
    angularDamping: number;
    isBullet: boolean;
    readonly mass: number;
    getCenterOfMassX(): number;
    getCenterOfMassY(): number;
    getCenterOfMass(): [number, number];
    readonly isSleeping: boolean;
    createDistanceJoint(imagePoint: number, otherInstance: IInstance, otherImagePoint: number, damping: number, massSpringDamperFrequency: number): void;
    createRevoluteJoint(imagePoint: number, otherInstance: IInstance): void;
    createLimitedRevoluteJoint(imagePoint: number, otherInstance: IInstance, lower: number, upper: number): void;
    createPrismaticJoint(imagePoint: number, otherInstance: IInstance, axisAngle: number, enableLimit: boolean, lowerTranslation: number, upperTranslation: number, enableMotor: boolean, motorSpeed: number, maxMotorForce: number): void;
    removeAllJoints(): void;
    getContactCount(): number;
    getContactX(index: number): number;
    getContactY(index: number): number;
    getContact(index: number): [number, number];
}

declare var IPhysicsBehaviorInstance: undefined | { new(): IPhysicsBehaviorInstance };

interface IPlatformBehaviorInstance extends IBehaviorInstance {
    fallThrough(): void;
    resetDoubleJump(allow: boolean): void;
    simulateControl(control: 'left' | 'right' | 'jump'): void;
    readonly speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    vectorX: number;
    vectorY: number;
    jumpStength: number;
    maxFallSpeed: number;
    gravity: number;
    gravityAngle: number;
    isDoubleJumpEnabled: boolean;
    jumpSustain: number;
    readonly isMoving: boolean;
    readonly isOnFloor: boolean;
    isByWall(side: 'left' | 'right'): boolean;
    readonly isJumping: boolean;
    readonly isFalling: boolean
    ceilingCollisionMode: 'stop' | 'preserve-momentum';
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}

declare var IPlatformBehaviorInstance: undefined | { new(): IPlatformBehaviorInstance };

interface ISineBehaviorInstance extends IBehaviorInstance {
    movement: 'horizontal' | 'vertical' | 'forwards-backwards' | 'size' | 'width' | 'height' | 'angle' | 'opacity' | 'z-elevation' | 'value-only';
    wave: 'sine' | 'triangle' | 'sawtooth' | 'reverse-sawtooth' | 'square';
    period: number;
    magnitude: number;
    phase: number;
    readonly value: number;
    updateInitialState(): void;
    isEnabled: boolean;
}

declare var ISineBehaviorInstance: undefined | { new(): ISineBehaviorInstance };

interface ITileMovementBehaviourInstance extends IBehaviorInstance {
    isIgnoringInput: boolean;
    isDefaultControls: boolean;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    isEnabled: boolean;
    setSpeed(x: number, y: number): void;
    setGridPosition(x: number, y: number, immediate: boolean): void;
    getGridPosition(): [number, number];
    modifyGridDimensions(width: number, height: number, xOffset: number, yOffset: number): void;
    isMoving(): boolean;
    isMovingDirection(direction: 'left' | 'right' | 'up' | 'down'): boolean;
    canMoveTo(x: number, y: number): boolean;
    canMoveDirection(direction: 'left' | 'right' | 'up' | 'down', distance: number): boolean;
    getTargetPosition(): [number, number];
    getGridTargetPosition(): [number, number];
    toGridSpace(x: number, y: number): [number, number];
    fromGridSpace(x: number, y: number): [number, number];
}

declare var ITileMovementBehaviourInstance: undefined | { new(): ITileMovementBehaviourInstance };
