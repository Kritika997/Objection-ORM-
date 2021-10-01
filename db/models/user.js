const {Model} = require("objection");

class User extends Model{
    static get tableName(){
        return 'user';
    };
    static get relationMappings() {
        const channel = require("./channel")
        return {
            channel: {
            relation: Model.HasOneRelation,
            modelClass: channel,
            join: {
              from: 'user.channelId',
              to: 'channel.id'
            }
          }
        };
      }
}
    


module.exports = User;