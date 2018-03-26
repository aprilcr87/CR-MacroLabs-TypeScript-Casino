class Profile{
    profileId : string;
    userName : string;
    balance? : number;

constructor(profileId:string, userName:string, balance:number){
this.profileId = profileId
this.userName = userName
this.balance = balance
}
public getProfileId(): string{
return this.profileId;
}
public getUserName(): string {
    return this.userName;
}
public getBalanace(): number {
    return this.balance;
}
}

