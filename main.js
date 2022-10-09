import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.requests.GatewayIntent;

import javax.security.auth.login.LoginException;

public class Main {

    private static JDA jda = null;
    private static final String BOT_TOKEN = "BOTのTokenを入力してください。";

    public static void main(String[] args) {
        try {
            jda = JDABuilder.createDefault(BOT_TOKEN, GatewayIntent.GUILD_MESSAGES)
                    .setRawEventsEnabled(true)
                    .setActivity(Activity.playing("設定したいステータスを入力してください"))
                    .build();
        } catch (LoginException e) {
            e.printStackTrace();
        }
    }

}
